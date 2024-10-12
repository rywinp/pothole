from flask import Flask
from api import api

app = Flask(__name__)
app.register_blueprint(api)


@app.route('/')
def hello():
    return '<h1>Hello, World!</h1>'