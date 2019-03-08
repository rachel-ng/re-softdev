#Team softegg -- Mai Rachlevsky && Rachel Ng && T Fabiha
#SoftDev2 pd7
#K 08: Ay Mon, Go Git It From Yer Flask
#2019-03-08  

from flask import Flask, render_template, session, request, url_for, redirect, flash
import os
from util import mongo

app = Flask(__name__)
app.secret_key = os.urandom(32)

@app.route("/", methods=["GET", "POST"])
def hello_world():
    return render_template("ip.html")

@app.route("/ipauth", methods=["GET", "POST"])
def ipauth():
    server = request.form["ip"].strip("")

    mongo.connect(server)
    return redirect(url_for("find"))
    
@app.route("/find", methods=["GET", "POST"])
def find():
    results = ""
    if request.method == "POST":
        year = request.form["year"]
        results = mongo.in_year(year)
    return render_template("find.html", results = results)


@app.route("/sending", methods=["GET", "POST"])
def sending():
    results = ""
    if request.method == "POST":
        year = request.form["year"]
        results = mongo.in_year(year)
    return render_template("find.html", results = results)
    #return redirect(url_for("find"))
    
#====================================RUN========================================

if __name__ == "__main__":
    app.debug = True
    app.run(host = "0.0.0.0")
