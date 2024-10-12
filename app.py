from flask import Flask, render_template
from api import api

app = Flask(__name__)
app.register_blueprint(api)


@app.route('/')
def hello():
    return render_template("main.html")