from flask import Flask, render_template

app = Flask(__name__, static_folder="assets")
application = app

@app.route('/')
def root():
    return render_template("home.html")

@app.route("/alcohol-licensing/personal-license-application")
def alcohol_licensing_personal_license_application():
    return render_template("personal-license-application.html")