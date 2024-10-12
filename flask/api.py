from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/api/get-data', methods=['GET'])
def get_data():
    data = {
        'latitude': 'Hello, World!',
        'longitude': 'success',
        'severity' : 2
    }
    return jsonify(data)

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
