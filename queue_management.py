import os, json
from os import environ
from flask import Flask, request
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
import amqp_setup
from invokes import invoke_http

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = environ.get('dbURL')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ENGINE_OPTIONS'] = {'pool_recycle': 299}

db = SQLAlchemy(app)
CORS(app) 

#URLs


queue_URL = environ.get('queue_URL') or "http://localhost:5002"
# auth url
auth_URL = environ.get('auth_URL') or "http://localhost:5001/esd-g3t1-project/us-central1/api/" 

# join queue
@app.route("/queue" , methods=['POST'])
def createQueue():
    body = request.get_json()
    creatingQueueStatus = invoke_http(queue_URL +"/queue", method="post", json = body)
    # bodyContent =  "Successfully Joined Queue - " + "TEST"
    # # number = appointment_result['data']['user_phone_number']
    # amqp_setup.channel.basic_publish(exchange=amqp_setup.exchangename, routing_key="info.sms",
    #                                  body=json.dumps({"message": bodyContent, "number": 91773336}))
    
    # print(bodyContent)
    # return "Success"
    if(creatingQueueStatus["success"] == False):
        return creatingQueueStatus
    else:
        # success
        # send to sms api
        bodyContent =  "Dear valued customer, you have successfully joined the queue! \nYour Queue Number is:  " +  creatingQueueStatus["queue_number"]
        amqp_setup.channel.basic_publish(exchange=amqp_setup.exchangename, routing_key="info.sms",
                                     body=json.dumps({"message": bodyContent, "number": body["phone_number"]}))
        # print(bodyContent)
        return creatingQueueStatus


def check_auth(request):
    auth_header = request.headers.get('Authorization')
    admin = invoke_http(auth_URL + "admin", method="GET", headers={"Authorization":"Bearer: " + auth_header})
    user = invoke_http(auth_URL + "user", method="GET", headers={"Authorization":"Bearer: " + auth_header})
    if admin:
        return 'admin'
    elif user:
        return 'user'
    return 'hacker'

@app.route("/shop/next", methods=['POST'])
def shopNextQueue():
    body = request.get_json() 
    # checking if user is admin
    userType = check_auth(request)
    if(userType != 'admin'):
        return {"success": False, "message": "You are not authorized to access this endpoint"}
    try:
        queueStatus = invoke_http(queue_URL +"/shop/next", method="put", json = body)
        print(queueStatus)
        if (queueStatus["success"] == True):
            
            phone_numbers = queueStatus["phone_numbers"]
            queue_ids = queueStatus["queue_ids"]

            for i in range(len(phone_numbers)):
                print(phone_numbers[i])
                
        #         bodyContent =  "Successfully Joined Queue - " +  creatingQueueStatus["queue_number"]
        # amqp_setup.channel.basic_publish(exchange=amqp_setup.exchangename, routing_key="info.sms",
        #                              body=json.dumps({"message": bodyContent, "number": body["phone_number"]}))
        
                msg = "Hello Customer, you are reaching the front of the queue now, please make your way to the shop!"
                amqp_setup.channel.basic_publish(exchange=amqp_setup.exchangename, routing_key="info.sms", 
                 body=json.dumps({"message": msg, "number": phone_numbers[i]}))
                # post request to update alert
                alerUpdate = invoke_http(queue_URL +"/alert", method="put", json = {"queue_id": queue_ids[i]})
                # print(queue_ids[i])

        return { "code": 200, "success":True,"msg":queueStatus["msg"]}
    except Exception as e:
        print(e)
        return {"code": 400,"success":False,"msg": "Something went wrong"}

@app.route("/telebot", methods=['POST'])
def fanoutMsg():
    userType = check_auth(request)
    if(userType != 'admin'):
        return {"success": False, "message": "You are not authorized to access this endpoint"}
    try:
        bodyContent = "Hello Customer, we have capcity to serve your needs now!" 
        amqp_setup.channel.basic_publish(exchange=amqp_setup.exchangename, routing_key="telebot.tele", 
        body=json.dumps(bodyContent))
        
        return {"code": 200, "success":True, "msg": "Message sent to all the users"}
    except:
        return {"code": 400, "success":False, "msg":"Something went wrong with telebot"}
    
if __name__ == "__main__":
    print("This is flask " + os.path.basename(__file__) +
          " for managing queue.")
    app.run(host="0.0.0.0", port=5101, debug=True) 

