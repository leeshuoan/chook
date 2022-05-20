## docker image command
# docker build -t aloysiusng23/appointment:chook ./
## docker containerise command
# docker run -p 5000:5000 -e dbURL=mysql+mysqlconnector://is213@host.docker.internal:3306/mydb_appointment aloysiusng23/appointment:chook
from os import environ
from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
import datetime 
from datetime import timedelta

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = environ.get('dbURL') or "mysql+mysqlconnector://is213@localhost:3306/mydb_appointment"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ENGINE_OPTIONS'] = {'pool_recycle': 299}

db = SQLAlchemy(app)
CORS(app) 

class Appointment(db.Model):
   __tablename__ = 'appointment'
   apt_id = db.Column(db.Integer, primary_key=True)
   date_time = db.Column(db.String(256))
   duration=db.Column(db.Integer)
   service_service_id = db.Column(db.Integer)
   shop_shop_id=db.Column(db.Integer)
   user_phone_number=db.Column(db.Integer)
   vendor_confirm=db.Column(db.Integer)

   def __init__(self, date_time, duration, service_service_id, shop_shop_id, user_phone_number, vendor_confirm):
       self.date_time = date_time
       self.duration = duration
       self.service_service_id = service_service_id
       self.shop_shop_id = shop_shop_id
       self.user_phone_number = user_phone_number
       self.vendor_confirm = vendor_confirm      
 
   def json(self):
       return {
            "apt_id": self.apt_id,
            "date_time": self.date_time,
            "duration": self.duration,
            "service_service_id": self.service_service_id,
            "shop_shop_id": self.shop_shop_id,
            "user_phone_number": self.user_phone_number,
            "vendor_confirm": self.vendor_confirm     
        }

        
#======Get all appointments, returns all appointments===================
@app.route("/appointment")
def get_all():
   appointmentList = Appointment.query.all()
   if len(appointmentList):
       return jsonify(
           {
               "code": 200,
               "data": [apt.json() for apt in appointmentList]
           }
       )
   return jsonify(
       {
           "code": 404,
           "message": "There are no appointments."
       }
   ), 404
#======Get appointments by shop id, returns all  appointment for shop===================
@app.route("/allShopAppointments/<int:shop_shop_id>")
def get_all_by_shop_shop_id(shop_shop_id):
   appointmentList = Appointment.query.filter_by(shop_shop_id=shop_shop_id).all()
   if appointmentList:
       return jsonify(
           {
               "code": 200,
               "data": [apt.json() for apt in appointmentList]
           }
       )
   return jsonify(
       {
           "code": 404,
           "message": "No appointment found."
       }
   ), 404
#==========================================================================================
#======Get appointments by user_phone_number, returns all  appointment for  user===========
@app.route("/allAppointments/<int:user_phone_number>")
def get_all_by_user_phone_number(user_phone_number):
   appointmentList = Appointment.query.filter_by(user_phone_number=user_phone_number).all()
   if appointmentList:
       return jsonify(
           {
               "code": 200,
               "data": [apt.json() for apt in appointmentList]
           }
       )
   return jsonify(
       {
           "code": 404,
           "message": "No appointment found."
       }
   ), 404
 
#==========================================================================================
#=============== helper function to check appointment clashes=======================================
def checkClash(aptJson, data, i):
    #DIFFERENT DAY DON'T NEED TO CHECK CLASH
    if (aptJson[i]['date_time'][0:10]!=data['date_time'][0:10]):
        pass
    else:
        #SAME DAY NEED TO CHECK CLASH
        #Format goes : Year, day,month ,hour, minute
        existing_start_time = datetime.datetime(int(aptJson[i]['date_time'][0:4]), int(aptJson[i]['date_time'][5:7]), int(aptJson[i]['date_time'][8:10]),int(aptJson[i]['date_time'][11:13]),int(aptJson[i]['date_time'][14:16]))
        existing_end_time= existing_start_time+timedelta(minutes=int(aptJson[i]['duration']))
        new_booked_start = datetime.datetime(int(data['date_time'][0:4]), int(data['date_time'][5:7]), int(data['date_time'][8:10]),int(data['date_time'][11:13]),int(data['date_time'][14:16]))
        new_booked_end = new_booked_start+timedelta(minutes=int(data['duration']))

        #if booking same time = reject
        if existing_end_time == new_booked_end:
            return 1
        #if booking is after existing start but before existing end
        if new_booked_start>existing_start_time and new_booked_start<existing_end_time:
            return 2
        #if booking is before existing start but ends after existing start
        if new_booked_start<existing_start_time and new_booked_end>existing_start_time:
            return 3
#==========================================================================================
#=============== create appointment=======================================
@app.route("/bookAppointment/<int:user_phone_number>", methods=['POST'])
def create_appointment(user_phone_number):
    data = request.get_json()
    new_appt = Appointment(data['date_time'], data['duration'], data['service_service_id'], data['shop_shop_id'], user_phone_number,0)
#====================================================Business logic, check if appointment clashes========================================================================================================
    user_apt = Appointment.query.filter_by(user_phone_number=user_phone_number).all()
    if user_apt:
       res =  (
           {
               "code": 200,
               "data": [apt.json() for apt in user_apt]
           }
       )
       aptJson = res['data']
       for i in range(len(aptJson)):
            checkResult = checkClash(aptJson, data, i)
            #if booking same time = reject OR
            #if booking is after existing start but before existing end OR
            #if booking is before existing start but ends after existing start
            if checkResult in range(1,4):
                return jsonify(
              {
                "code": 400,
                "message": "Booking failed. Appointment clashes with an existing appointment"
             }
           ), 400            
#=============== End of check, can proceed to create========================================================================
    try:
        db.session.add(new_appt)
        db.session.commit()
    except Exception as e:
        print(e)
        return jsonify(
            {
                "code": 500,
                "data": {
                    "user_phone_number": user_phone_number
                },
                "message": "An error occurred creating the appointment."
            }
        ), 500

    return jsonify(
        {
            "code": 201,
            "data": new_appt.json(),
            "message": "Appointment successfully booked"
        }
    ), 201
#=========================================================================


#=============== Change appt by apt_id======================================
# json input should have 3 variables:
#   - date_time
#   - vendor_confirm # 1 for confirm, 2 for reject
#   - duration (remove this bracket when u see the changes!)
#   - service_service_id (remove this bracket when u see the changes!)
@app.route("/allAppointments/<int:apt_id>", methods=['PUT'])
def change_apt(apt_id):
    apt = Appointment.query.filter_by(apt_id=apt_id).first()
    if apt:
        # take json input and parse it here
        data = request.get_json()
#====================================================Business logic, check if appointment clashes========================================================================================================
        # get user's phone number for checking 
        # assuming all valid inputs!!
        user_phone_number = data['user_phone_number']
        user_apt = Appointment.query.filter_by(user_phone_number=user_phone_number).all()
        if user_apt:
            res =  (
                    {
                        "code": 200,
                        "data": [apt.json() for apt in user_apt]
                    }
                )
        aptJson = res['data']
        for i in range(len(aptJson)):
                checkResult = checkClash(aptJson, data, i)
                #if booking same time = reject OR
                #if booking is after existing start but before existing end OR
                #if booking is before existing start but ends after existing start
                if checkResult in range(1,4):
                    return jsonify(
                        {
                            "code": 400,
                            "message": "Update of appointment failed. New appointment slot clashes with an existing appointment"
                        }
                    ), 400   
#=============== End of check, can proceed to update appointment ======================================================================
        # resume updating appointment
        if data['date_time']:
            apt.date_time = data['date_time']
        if data['duration']:
            apt.duration = data['duration']
        if data['service_service_id']:
            apt.service_service_id = data['service_service_id']
    #    if data['vendor_confirm']:   # 1 for confirm, 2 for reject
    #        apt.vendor_confirm = data['vendor_confirm']
        apt.vendor_confirm = 0 #when customer change appointment, vendor need to confirm again
        try:
            db.session.commit()
        except Exception as e:
            print(e)
            return jsonify(
                {
                    "code": 500,
                    "data": {
                        "user_phone_number": user_phone_number
                    },
                    "message": "An error occurred updating the appointment."
                }
            ), 500

        return jsonify(
            {
                "code": 200,
                "data": apt.json()
            }
        )
    # if apt == false will return no appointment found
    return jsonify(
        {
            "code": 404,
            "data": {
                "apt_id": apt_id
            },
            "message": "Appointment not found."
        }
    ), 404

#=================================================================================
#=============== Delete appt by apt_id============================================

@app.route("/allAppointments/<int:apt_id>", methods=['DELETE'])
def delete_apt(apt_id):
   apt = Appointment.query.filter_by(apt_id=apt_id).first()
   if apt:
       db.session.delete(apt)
       db.session.commit()
       return jsonify(
           {
               "code": 200,
               "data": {
                   "apt_id": apt_id
               },
               "message" : "Appointment deleted successfully"
           }
       )
   return jsonify(
       {
           "code": 404,
           "data": {
               "apt_id": apt_id
           },
           "message": "Appointment not found."
       }
   ), 404
#=================================================================================

#=============== Confirm/Approve Appointment (Vendor) ============================
# When vendor clicks 'confirm/approve' auto update vendor_confirm to 1
@app.route("/confirmAppointment/<int:apt_id>", methods=['PUT'])
def vendor_cfm_appt(apt_id):
   apt = Appointment.query.filter_by(apt_id=apt_id).first()
   if apt:
       if apt.vendor_confirm == 1:
           return jsonify(
           {
               "code": 400,
               "data": apt.json(),
               "message" : "This appointment is already confirmed"
           }
       )
       if apt.vendor_confirm == 2:
           return jsonify(
           {
               "code": 400,
               "data": apt.json(),
               "message" : "You cannot confirm a rejected appointment"
           }
       )
       apt.vendor_confirm = 1
       db.session.commit()
       return jsonify(
           {
               "code": 200,
               "data": apt.json(),
               "message" : "Appointment confirmed"
           }
       )
   return jsonify(
       {
           "code": 404,
           "data": {
               "apt_id": apt_id
           },
           "message": "Appointment not found."
       }
   ), 404
#=================================================================================

#=============== Reject Appointment (Vendor) ============================
# When vendor clicks 'reject' auto update vendor_confirm to 2

@app.route("/rejectAppointment/<int:apt_id>", methods=['PUT'])
def vendor_rej_appt(apt_id):
   apt = Appointment.query.filter_by(apt_id=apt_id).first()
   if apt:
        if apt.vendor_confirm == 1:
            return jsonify(
                {
                    "code": 400,
                    "data": apt.json(),
                    "message" : "You cannot reject a confirmed appointment"
                }
            )
        if apt.vendor_confirm == 2:
            return jsonify(
                {
                    "code": 400,
                    "data": apt.json(),
                    "message" : "This appointment is already rejected"
                }
            )
        apt.vendor_confirm = 2
        db.session.commit()
        return jsonify(
           {
               "code": 200,
               "data": apt.json(),
               "message" : "Appointment rejected"
           }
       )
   return jsonify(
       {
           "code": 404,
           "data": {
               "apt_id": apt_id
           },
           "message": "Appointment not found."
       }
   ), 404
#=================================================================================

 
if __name__ == '__main__':
#    app.run(port=5000, debug=True)
   # for docker
   app.run(host='0.0.0.0', port=5000, debug=True)
 
 

