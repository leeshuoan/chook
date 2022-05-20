## docker image command
# docker build -t aloysiusng23/services:chook ./
## docker containerise command
# docker run -p 5001:5001 -e dbURL=mysql+mysqlconnector://is213@host.docker.internal:3306/mydb_service aloysiusng23/services:chook
from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from os import environ

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = environ.get('dbURL') or "mysql+mysqlconnector://is213@localhost:3306/mydb_service"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ENGINE_OPTIONS'] = {'pool_recycle': 299}
 
db = SQLAlchemy(app)
CORS(app) 
 
 
class Services(db.Model):
   __tablename__ = 'service'
   service_id = db.Column(db.Integer, primary_key=True)
   name = db.Column(db.String(256))
   description = db.Column(db.String(256))
   price=db.Column(db.Float)
   shop_shop_id=db.Column(db.Integer)
   duration=db.Column(db.Integer)

 
   def __init__(self, name, description,price,shop_shop_id,duration):
       self.name = name
       self.description = description
       self.price = price
       self.shop_shop_id = shop_shop_id
       self.duration = duration
 
   def json(self):
       return {
            "service_id": self.service_id,
            "name": self.name,
            "description": self.description,
            "price": self.price,
            "shop_shop_id": self.shop_shop_id,
            "duration": self.duration
        }


#======Return all services, regardless of shop===================
@app.route("/services")
def get_all_services():
   services = Services.query.all()
   if services:
       return jsonify(
           {
               "code": 200,
               "data": [serv.json() for serv in services]
           }
       )
   return jsonify(
       {
           "code": 404,
           "message": "No services found."
       }
   ), 404
        
#======Get services by shop id, returns all available services for shop===================
@app.route("/services/<int:shop_shop_id>")
def get_all_by_shop_shop_id(shop_shop_id):
   services = Services.query.filter_by(shop_shop_id=shop_shop_id).all()
   if services:
       return jsonify(
           {
               "code": 200,
               "data": [serv.json() for serv in services]
           }
       )
   return jsonify(
       {
           "code": 404,
           "message": "No services found for that shop."
       }
   ), 404
# #==========================================================================================


#======Get services details by service_id===================
@app.route("/serviceDetails/<int:service_id>")
def getServiceDetails(service_id):
   services = Services.query.filter_by(service_id=service_id).all()
   if services:
       return jsonify(
           {
               "code": 200,
               "data": [serv.json() for serv in services]
           }
       )
   return jsonify(
       {
           "code": 404,
           "message": "No services found for that ID."
       }
   ), 404
# #==========================================================================================

# #=============== create service=======================================
@app.route("/services/<int:shop_shop_id>", methods=['POST'])
def add_service(shop_shop_id):
    data = request.get_json()
    new_service = Services(data["name"], data["description"],data["price"],shop_shop_id,data["duration"])
    try:
        db.session.add(new_service)
        db.session.commit()
    except:
        return jsonify(
            {
                "code": 500,
                "data": {
                    "shop_shop_id": shop_shop_id
                },
                "message": "An error occurred adding the service."
            }
        ), 500

    return jsonify(
        {
            "code": 201,
            "data": new_service.json(),
            "Message": "Service added successfully!"
        }
    ), 201
# #=========================================================================
# #=============== update a service=======================================
@app.route("/services/<int:service_id>", methods=['PUT'])
def update_service(service_id):
    service = Services.query.filter_by(service_id=service_id).first()
    if service:
        data = request.get_json()
        if data["name"]:
            service.name = data['name']
        if data["description"]:
            service.description = data['description']
        if data["price"]:
            service.price = data['price']
        if data["duration"]:
            service.duration = data['duration']

        db.session.commit()
        return jsonify(
            {
                "code": 201,
                "data": service.json(),
                "Message": "Service updated successfully!"
            }
        )
    return jsonify(
        {
            "code": 404,
            "data": {
                "service_id": service_id
            },
            "message": "Service not found."
        }
    ), 404
# #=============== delete a service=======================================
@app.route("/services/<int:service_id>", methods=['DELETE'])
def delete_service(service_id):
    service = Services.query.filter_by(service_id=service_id).first()
    if service:
        db.session.delete(service)
        db.session.commit()
        return jsonify(
            {
                "code": 201,
                "data": {
                    "service_id": service_id
                },
                "Message": "Service deleted successfully!"
            }
        )
    return jsonify(
        {
            "code": 404,
            "data": {
                "service_id": service_id
            },
            "message": "Service not found."
        }
    ), 404

# #=========================================================================

if __name__ == '__main__':
   app.run(host="0.0.0.0", port=5003, debug=True)
 
 




