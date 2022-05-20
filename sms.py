import json, os
from twilio.rest import Client 
import amqp_setup


account_sid = os.environ.get("account_sid") 
auth_token = os.environ.get("auth_token") 
service_id = os.environ.get("service_id") 

smsBindingKey='*.sms'

def smsLog():
    amqp_setup.check_setup()
        
    queue_name = 'sms'
    
    # set up a consumer and start to wait for coming messages
    amqp_setup.channel.basic_consume(queue=queue_name, on_message_callback=callback, auto_ack=True)
    amqp_setup.channel.start_consuming() # an implicit loop waiting to receive messages; 
    #it doesn't exit by default. Use Ctrl+C in the command window to terminate it.

def callback(channel, method, properties, body): # required signature for the callback; no return
    print("\nReceived a SMS Message" + __file__)
    print(json.loads(body))
    content = json.loads(body)
    processSMS(content['message'], content['number'])
    print() # print a new line feed

#process sms and log message 
def processSmsLog(requestdetails):
    #print("Recording message log:")
    print(requestdetails)
    

def processSMS(sms_message, number): 
    # 3. init twillio api 
    client = Client(account_sid, auth_token) 
    
    #return message sent or fail
    # 4. call twillio api
    num = "+65"+ str(number)
    message = client.messages.create(  
                            messaging_service_sid=service_id, 
                            body= sms_message,      
                            to= num
                        ) 
    if message.sid:
        return {
            "code": 200,
            "data": {
                "message": "SMS has been sent."
            }
        }
    return {
        "code": 400,
        "data": {
            "message": "SMS not sent."
        }
    }

if __name__ == "__main__":  # execute this program only if it is run as a script (not by 'import')
    print("\nThis is " + os.path.basename(__file__), end='')
    print(": monitoring routing key '{}' in exchange '{}' ...".format(smsBindingKey, amqp_setup.exchangename))
    smsLog()