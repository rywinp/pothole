from flask import Flask, Blueprint

api = Blueprint('api', __name__)

@api.route("/apsi")
def main():
    return "<h1> Hello API <h1>"