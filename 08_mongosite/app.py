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
    server = request.form.get("ip").strip("")

    mongo.connect(server)
    mongo.create("movies.json")
    return redirect(url_for("find"))

@app.route("/find", methods=["GET", "POST"])
def find():
    results = ""
    if request.method == "GET":
        return render_template("find.html")
    if request.method == "POST":
        query = request.form.get("query")
        if query == "year":
            try:
                year = int(request.form.get("inp"))
                results = mongo.in_year(year)
            except ValueError:
                flash("Not an integer, try again!")
        elif query == "genre":
            genre = request.form.get("inp").capitalize()
            results = mongo.of_genre(genre)
        elif query == "actor":
            actor =  request.form.get("inp").capitalize()
            results = mongo.with_actor(' '.join([i.capitalize() for i in actor.split()]))
        elif query == "actors":
            actor0, actor1 =  request.form.get("inp").split(",")
            actor0 = ' '.join([i.capitalize() for i in actor0.split()])
            actor1 = ' '.join([i.capitalize() for i in actor1.split()])
            print(actor0)
            print(actor1)
            results = mongo.with_actors(actor0,actor1)
    return render_template("find.html", results = results)



if __name__ == "__main__":
    app.debug = True
    app.run(host = "0.0.0.0")
