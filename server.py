import sys
sys.path.insert(0, '/var/www/GOVLITE.UK')

from server import application

admin@ip-172-26-14-70:/var/www/GOVLITE.UK$ cat server.py
from flask import Flask, render_template

app = Flask(__name__, static_folder="assets")
application = app

@app.route('/')
def root():
    return render_template("home.html")

@app.route("/alcohol-licensing/personal-license-application")
def alcohol_licensing_personal_license_application():
    return render_template("personal-license-application.html")