from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///potholes.db'
# Init database
db = SQLAlchemy(app)

# Create db model
class Potholes(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    lat = db.Column(db.Integer)
    lng = db.Column(db.Integer)
    severity = db.Column(db.Integer)
    date_created = db.Column(db.DateTime, default=datetime.now)

    def __repr__(self):
        return f"<Pothole {self.id} at {self.location}>"

CORS(app)

@app.route('/api/get-data', methods=['GET'])
def get_data():
    data = []
    pothole_1 = {"lat": 10, "lng": 110, "severity": 5, "id": 1}
    data.append(pothole_1)
    pothole_2 = {"lat": 50, "lng": 150, "severity": 2, "id": 2}
    data.append(pothole_2)
    return jsonify(data), 200

@app.route('/api/post-data', methods=["POST"])
def post_data():
    data = request.get_json()
    data = {
        'latitude': 'Hello, World!',
        'longitude': 'success',
        'severity' : 2
    }
    return jsonify(data)
    # we need to update the data to the database

@app.route('/api/get-report', methods=["GET"])
def get_report():
    data = {
        'latitude': 'Hello, World!',
        'longitude': 'success',
        'severity' : 2
    }
    return jsonify(data)
    # get all the potholes from database
    # return a json that you will create a html page with for example, an array with potholes
    # turn that component into a pdf file

if __name__ == '__main__':
    app.run(debug=True)
