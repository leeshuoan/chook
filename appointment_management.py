'''
How to test this MS
1. Run appointment.py, services.py, shop.py and appointment_management.py on seperate terminals
2. open auth/functions in another terminal -> npm install , npm run serve
3. log into the UI
    open a terminal and cd into the UI 
    npm install - if not done yet
    npm run dev
4. inspect element -> console and find bearer token at the object
'''
import os
import sys
import json
from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from invokes import invoke_http
import threading
import queue
import amqp_setup

from os import environ

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = environ.get(
    'dbURL') or "mysql+mysqlconnector://is213@localhost:3306/mydb_appointment"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ENGINE_OPTIONS'] = {'pool_recycle': 299}

db = SQLAlchemy(app)
CORS(app)

# ======================= URLs =======================
appointment_URL = environ.get(
    'appointment_URL') or "http://127.0.0.1:5000/allAppointments/"
shop_appointment_URL = environ.get(
    'shop_appointment_URL') or "http://127.0.0.1:5000/allShopAppointments/"  # new
book_appt_URL = environ.get(
    'book_appt_URL') or "http://127.0.0.1:5000/bookAppointment/"
confirm_appointment_URL = environ.get(
    'confirm_appointment_URL') or "http://127.0.0.1:5000/confirmAppointment/"
reject_appointment_URL = environ.get(
    'reject_appointment_URL') or "http://127.0.0.1:5000/rejectAppointment/"
auth_URL = environ.get(
    'auth_URL') or "http://127.0.0.1:5001/esd-g3t1-project/us-central1/api/"
service_URL = environ.get('service_URL') or "http://127.0.0.1:5003"
shop_URL = environ.get('shop_URL') or "http://127.0.0.1:5005/allShops"


# ********************************************************* helper functions *********************************************************
# ======================= error checking function to see if the call to the MS works =======================
'''feed in 
ms_name: microservice name 
result: result from calling the microservice'''


def checkError(ms_name, result):
    code = result["code"]
    if code not in range(200, 300):
        # print the error
        print(f"{ms_name} status ({code}) sent to the error microservice:", result)
        # return the errror
        return {
            "code": 500,
            "data": {f"{ms_name}_result": result},
            "message": f"{ms_name} failure sent for error handling."
        }
# ======================= Helper Function to return if user is authenticated and if he/she is, return his/her role =======================


def check_auth(request):
    auth_header = request.headers.get('Authorization')
    admin = invoke_http(auth_URL + "admin", method="GET",
                        headers={"Authorization": "Bearer: " + auth_header})
    user = invoke_http(auth_URL + "user", method="GET",
                       headers={"Authorization": "Bearer: " + auth_header})
    if admin:
        return 'admin'
    elif user:
        return 'user'
    return 'hacker'

# ======================= Helper Function to process threading =======================


def processThreading(service_URL, shop_URL):
    servicethread_queue = queue.Queue()
    shopthread_queue = queue.Queue()
    service_t = threading.Thread(
        target=service_getter, args=(servicethread_queue, service_URL,))
    shop_t = threading.Thread(
        target=shop_getter, args=(shopthread_queue, shop_URL,))
    service_t.start()
    shop_t.start()
    service_t.join()
    shop_t.join()
    service_detail = servicethread_queue.get()
    shop_detail = shopthread_queue.get()

    return service_detail, shop_detail
# ********************************************************* End helper functions *********************************************************


# Begin Main APIs of this complex service
# ====================================================Customer view booked Appt========================================================================================================
'''
The complex service below will allow user to view all appointments under that particular phone number
'''


@app.route("/view_appointment/<int:user_phone_number>", methods=['GET'])
def view_appointments(user_phone_number):
    # Simple check of input format and data of the request are JSON
    try:
        print("\nReceived a GET Request for user with phone number:",
              user_phone_number)
        res = processViewAppt(user_phone_number)
        return jsonify(res), res["code"]

    except Exception as e:
        # Unexpected error in code
        exc_type, exc_obj, exc_tb = sys.exc_info()
        fname = os.path.split(exc_tb.tb_frame.f_code.co_filename)[1]
        ex_str = str(e) + " at " + str(exc_type) + ": " + \
            fname + ": line " + str(exc_tb.tb_lineno)
        print(ex_str)

        return jsonify({
            "code": 500,
            "message": "appointment_management.py internal error: " + ex_str
        }), 500
# ------------------------------------------------- helper functions to call service    -------------------------------------------------


# ====================================================Customer book new Appt========================================================================================================
'''
The complex service below will allow user to view all appointments under that particular phone number
'''


@app.route("/book_appointment/<int:user_phone_number>", methods=['POST'])
def book_appointment(user_phone_number):
    # Simple check of input format and data of the request are JSON
    user_type = check_auth(request)
    if user_type == "hacker":
        return jsonify({
            "code": 401,
            "message": "You are not authorized to access this resource."
        }), 401
    elif user_type != "admin":
        return jsonify({
            "code": 401,
            "message": "You are not authorized to access this resource."
        }), 401
    if request.is_json:
        try:
            appointment = request.get_json()
            print("\nReceived an appointment booking in JSON:", appointment)

            # Do the actual work
            result = processBookAppt(appointment, user_phone_number)
            return jsonify(result), result["code"]

        except Exception as e:
            # Unexpected error in code
            exc_type, exc_obj, exc_tb = sys.exc_info()
            fname = os.path.split(exc_tb.tb_frame.f_code.co_filename)[1]
            ex_str = str(e) + " at " + str(exc_type) + ": " + \
                fname + ": line " + str(exc_tb.tb_lineno)
            print(ex_str)

            return jsonify({
                "code": 500,
                "message": "appointment_management.py internal error: " + ex_str
            }), 500

    # if reached here, not a JSON request.
    return jsonify({
        "code": 400,
        "message": "Invalid JSON input: " + str(request.get_data())
    }), 400
# ------------------------------------------------------------------------------------------------


# ====================================================Shop view upcoming appointment========================================================================================================
'''
The complex service below will allow shop owner to view all their upcoming appointments
'''


@app.route("/getUpcomingAppointment/<int:shop_shop_id>", methods=['GET'])
def view_upcomingshopappt(shop_shop_id):
    # Simple check of input format and data of the request are JSON
    try:
        print("\nReceived a GET Request for shop with shop_id:", shop_shop_id)
        res = processViewShopUpcomingAppt(shop_shop_id)
        return jsonify(res), res["code"]

    except Exception as e:
        # Unexpected error in code
        exc_type, exc_obj, exc_tb = sys.exc_info()
        fname = os.path.split(exc_tb.tb_frame.f_code.co_filename)[1]
        ex_str = str(e) + " at " + str(exc_type) + ": " + \
            fname + ": line " + str(exc_tb.tb_lineno)
        print(ex_str)

        return jsonify({
            "code": 500,
            "message": "appointment_management.py internal error: " + ex_str
        }), 500


# ====================================================Shop view pending appointment========================================================================================================
'''
The complex service below will allow shop owner to view all their pending appointments
'''


@app.route("/getPendingAppt/<int:shop_shop_id>", methods=['GET'])
def view_pending_appt(shop_shop_id):
    # Simple check of input format and data of the request are JSON
    try:
        print("\nReceived a GET Request for shop with shop_id:", shop_shop_id)
        res = processViewShopPendingAppt(shop_shop_id)
        return jsonify(res), res["code"]

    except Exception as e:
        # Unexpected error in code
        exc_type, exc_obj, exc_tb = sys.exc_info()
        fname = os.path.split(exc_tb.tb_frame.f_code.co_filename)[1]
        ex_str = str(e) + " at " + str(exc_type) + ": " + \
            fname + ": line " + str(exc_tb.tb_lineno)
        print(ex_str)

        return jsonify({
            "code": 500,
            "message": "appointment_management.py internal error: " + ex_str
        }), 500
# ------------------------------------------------- helper functions to call service    -------------------------------------------------


def service_getter(servicethread_queue, service_URL):
    # Invoke the service microservice
    print('\n-----Invoking Service microservice-----')
    service_detail = invoke_http(service_URL, method='GET')
    print('\n-----Service Done-----')
    code = (service_detail['code'])
    if code not in range(200, 300):
        return {
            "code": 500,
            "message": "An error occurred while retriving the records"
        }
    servicethread_queue.put(service_detail)
# ------------------------------------------------- helper functions to call shop   -------------------------------------------------


def shop_getter(shopthread_queue, shop_URL):
    # Invoke the shop microservice
    print('\n-----Invoking Shop microservice-----')
    shop_detail = invoke_http(shop_URL, method='GET')
    print('\n-----Shop Done-----')
    if shop_detail:
        shopthread_queue.put(shop_detail)
    else:
        return {
            "code": 500,
            "message": "An error occurred while retriving the records"
        }
    # ------shop_getter for python below------
    # # Invoke the shop microservice
    # print('\n-----Invoking Shop microservice-----')
    # shop_detail = invoke_http(shop_URL, method='GET')
    # print('\n-----Shop Done-----')
    # print(shop_detail)
    # code = (shop_detail['code'])
    # if code not in range(200, 300):
    #     return {
    #         "code": 500,
    #         "message": "An error occurred while retriving the records"
    #     }
    # shopthread_queue.put(shop_detail)
# ------------------------------------------------- helper function that does the actual work for the complex service-------------------------------------------------


def processViewAppt(user_phone_number):
    # Invoke the appointment microservice
    print('\n-----Invoking Appointment microservice-----')
    list_of_appt = invoke_http(
        appointment_URL+str(user_phone_number), method='GET')
    # print('list_of_appt:', list_of_appt)
    code = list_of_appt['code']

    if code == 404:
        return {
            "code": 404,
            "message": "No appointment found"
        }

    if code not in range(200, 300):
        # Return Error
        return {
            "code": 500,
            "message": "An error occurred while retriving the records"
        }
    # get details from shop and service MS
    service_detail, shop_detail = processThreading(
        f"{service_URL}/services", shop_URL)

    for i in (service_detail['data']):
        for j in (list_of_appt['data']):
            if (j['service_service_id'] == i['service_id']):
                j['service_name'] = i['name']

    for shop in shop_detail:
        for j in (list_of_appt['data']):
            if (j['shop_shop_id'] == shop['shop_id']):
                j['shop_name'] = shop['name']
                
    # ----- for python shop -------
    # for i in (shop_detail['data']):
    #     for j in (list_of_appt['data']):
    #         if (j['shop_shop_id'] == i['shop_id']):
    #             j['shop_name'] = i['name']

    return {
        "code": 200,
        "data": {
            "list_of_appt": list_of_appt
        }
    }


# ====================================================End Customer view booked Appt========================================================================================================
# ------------------------------------------------- helper function that does the actual work for the complex service-------------------------------------------------
def processViewShopUpcomingAppt(shop_shop_id):
    # Invoke the appointment microservice
    print('\n-----Invoking Appointment microservice-----')
    list_of_appt = invoke_http(
        shop_appointment_URL+str(shop_shop_id), method='GET')
    print(shop_appointment_URL+str(shop_shop_id))
    upcoming_apt = []
    for i in (list_of_appt['data']):
        if (i['vendor_confirm'] == 1):
            upcoming_apt.append(i)
        else:
            pass

    code = list_of_appt['code']
    if code == 404:
        return {
            "code": 404,
            "message": "No appointment found"
        }
    if code not in range(200, 300):
        # Return Error
        return {
            "code": 500,
            "message": "An error occurred while retrieving the records"
        }
    # get details from shop and service MS
    service_detail, shop_detail = processThreading(
        f"{service_URL}/services", shop_URL)

    for i in (service_detail['data']):
        for j in (upcoming_apt):
            if (j['service_service_id'] == i['service_id']):
                j['service_name'] = i['name']

    for shop in shop_detail:
        for j in (upcoming_apt):
            if (j['shop_shop_id'] == shop['shop_id']):
                j['shop_name'] = shop['name']

    return {
        "code": 200,
        "data": {
            "list_of_upcoming_appt": upcoming_apt
        }
    }

# ------------------------------------------------- helper function that does the actual work for the complex service-------------------------------------------------


def processViewShopPendingAppt(shop_shop_id):
    # Invoke the appointment microservice
    print('\n-----Invoking Appointment microservice-----')
    list_of_appt = invoke_http(
        shop_appointment_URL+str(shop_shop_id), method='GET')
    print(shop_appointment_URL+str(shop_shop_id))
    pending_apt = []
    for i in (list_of_appt['data']):
        if (i['vendor_confirm'] == 0):
            pending_apt.append(i)
        else:
            pass

    code = list_of_appt['code']
    if code == 404:
        return {
            "code": 404,
            "message": "No appointment found"
        }
    if code not in range(200, 300):
        # Return Error
        return {
            "code": 500,
            "message": "An error occurred while retrieving the records"
        }
    # get details from shop and service MS
    service_detail, shop_detail = processThreading(
        f"{service_URL}/services", shop_URL)

    for i in (service_detail['data']):
        for j in (pending_apt):
            if (j['service_service_id'] == i['service_id']):
                j['service_name'] = i['name']

    for shop in shop_detail:
        for j in (pending_apt):
            if (j['shop_shop_id'] == shop['shop_id']):
                j['shop_name'] = shop['name']

    return {
        "code": 200,
        "data": {
            "list_of_pending_appt": pending_apt
        }
    }

# ====================================================End Customer view booked Appt========================================================================================================
# ==================== Process Book Apt=======


def processBookAppt(appointment, user_phone_number):
    # Invoke the appointment microservice
    print('\n-----Invoking Appointment microservice-----')
    print(appointment)
    booking_result = invoke_http(
        book_appt_URL+str(user_phone_number), method='POST', json=appointment)
    print('booking_result:', booking_result)
    if booking_result['message'] == "Booking failed. Appointment clashes with an existing appointment":
        return {
            "code": 400,
            "data": {
                "code": 400,
                "message": "Your booking failed because your appointment clashes with another existing appointment"
            }}

    if booking_result['message'] == "An error occurred creating the appointment.":
        return {
            "code": 500,
            "data": {
                "code": 500,
                "message": "An error occurred creating the appointment."
            }}

    return {
        "code": 201,
        "data": {
            "appointment_result": booking_result
        }
    }


# =========================================
# ====================================================Start Staff Appt Mgmt========================================================================================================
'''
The complex service below will allow staff to confirm or reject appointment bookings
We will need the UI to supply 
1. approvalCode ( to see if the appointment is rejected or approved)
2. userName (for the sms message)
e.g.
{
    "approvalCode": 1,
    "userName": "Jason"
}
'''


@app.route("/manage_appointment/<int:aptid>", methods=['POST'])
def manage_appointment(aptid):
    # Simple check of input format and data of the request are JSON
    if request.is_json:
        # 1. authentication of user - reading the bearer token before reading the request body!
        user_type = check_auth(request)
        if user_type == "hacker":
            return jsonify({
                "code": 401,
                "message": "You are not authorized to access this resource."
            }), 401
        elif user_type != "admin":
            return jsonify({
                "code": 401,
                "message": "You are not authorized to access this resource."
            }), 401

        try:
            aptInfo = request.get_json()
            print("\nReceived an appointment confirmation/rejection in JSON:", aptInfo)
            print(aptInfo)
            # record the sms log
            print(
                '\n\n-----Publishing the (sms info) message with routing_key=order.info-----')
            # do the actual work
            # 2. process appointment confirmation info (aptInfo, aptid)
            result = processApptMgmt(aptInfo, aptid)
            return jsonify(result)

        except Exception as e:
            # Unexpected error in code
            exc_type, exc_obj, exc_tb = sys.exc_info()
            fname = os.path.split(exc_tb.tb_frame.f_code.co_filename)[1]
            ex_str = str(e) + " at " + str(exc_type) + ": " + \
                fname + ": line " + str(exc_tb.tb_lineno)
            print(ex_str)

            return jsonify({
                "code": 500,
                "message": "appointment_management.py internal error: " + ex_str
            }), 500

    # if reached here, not a JSON request.
    return jsonify({
        "code": 400,
        "message": "Invalid JSON input: " + str(request.get_data())
    }), 400

# -------------------------------------------------helper function that does the actual work for the complex service-------------------------------------------------


def processApptMgmt(aptInfo, aptid):
    # 3. accept/reject appointment confirmation info {aptInfo, aptid}
    # Invoke the appointment microservice
    # ------------------------------------- 1 = confirm, 2 = reject -------------------------------------------------
    if aptInfo['approvalCode'] == 1:
        print('\n-----Invoking appt microservice, confirmed-----')
        appointment_result = invoke_http(
            confirm_appointment_URL+str(aptid), method='PUT')

    elif aptInfo['approvalCode'] == 2:
        print('\n-----Invoking appt microservice, rejected-----')
        appointment_result = invoke_http(
            reject_appointment_URL+str(aptid), method='PUT')

    appt = appointment_result['data']
    # 4. check the appt result; if fail, send to error microservice
    status = checkError("appointment_result", appointment_result)
    if status:
        return status
    # 5. Get service and shop concurrently
    print('\n-----Invoking shop and service microservices concurrently-----')
    if appointment_result['code'] in range(200, 300):
        service_detail, shop_detail = processThreading(
            f"{service_URL}/serviceDetails/{appt['service_service_id']}", f"{shop_URL}/{appt['shop_shop_id']}")
        print(service_detail, shop_detail)

        if service_detail['data']:  # array of services
            for i in service_detail['data']:
                if appt['service_service_id'] == i['service_id']:
                    appt['service_name'] = i['name']
        else:
            return {
                "code": 404,
                "message": "No services found for that ID."
            }
        if shop_detail:     # one json obj only
            if appt['shop_shop_id'] == shop_detail['shop_id']:
                appt['shop_name'] = shop_detail['name']
        else:
            return {
                "code": 404,
                "message": "Shop not found."
            }

    # 6 prepare message to send to sms service
        # request made on appointment - approved/confirmed
    print("-------Preparing SMS message---------")
    if(aptInfo['approvalCode'] == 1):
        body_contents = "Dear valued customer, this is to inform you that your booking for " + \
            appt['service_name'] + \
            " has been confirmed on the " + appt['date_time']
    # request made on appointment - rejected
    elif(aptInfo['approvalCode'] == 2):
        body_contents = "Dear valued customer, we regret to inform you that your booking for " + \
            appt['service_name'] + " with us on the " + \
            appt['date_time'] + " is not been approved."
    # request made on appointment - pending
    elif(aptInfo['approvalCode'] == 0):
        body_contents = "Dear valued customer, we have received your Appointment request for " + \
            appt['service_name'] + " on the " + appt['date_time'] + \
            ". We will notify you via SMS on the updated status for the booking."

    # 7. Log SMS
    print("-------Preparing SMS message---------")
    number = appointment_result['data']['user_phone_number']
    amqp_setup.channel.basic_publish(exchange=amqp_setup.exchangename, routing_key="info.sms",
                                     body=json.dumps({"message": body_contents, "number": number}))

    # 8. Return confirmed/rejected appointment with customer info
    return {
        "code": 200,
        "data": {
            "appointment_result": appointment_result,
            # "sms_result": sms_result
        }
    }
# ====================================================End Staff Appt Mgmt========================================================================================================


if __name__ == "__main__":
    print("This is flask " + os.path.basename(__file__) +
          " for managing appointments.")
    app.run(host="0.0.0.0", port=5100, debug=True)
