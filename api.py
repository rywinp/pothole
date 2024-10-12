from flask import Flask, Blueprint

api = Blueprint('api', __name__)

@api.route("/api")
def main():
    return "<h1> Hello API <h1>"