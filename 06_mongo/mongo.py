import pymongo
SERVER_ADDR = "167.99.13.106"
connection = pymongo.MongoClient(SERVER_ADDR)
db = connection.test
collection = db.restaurants

def r_borough (borough):
    return [restaurant for restaurant in db.restaurants.find({"borough": borough})]

def r_zip (zipcode):
    return [restaurant for restaurant in db.restaurants.find({"address.zipcode": zipcode})]

def r_zip_grade (zipcode, grade):
    return [restaurant for restaurant in db.restaurants.find({"address.zipcode":zipcode},{"grades.grade": grade})]

def r_zip_thresh (zipcode, thresh):
    return [restaurant for restaurant in db.restaurants.find({"address.zip":zipcode},{"grades.score": {"$lt": thresh}})]

print("borough")
for i in r_borough("Queens"):
    print (str(i["_id"]) + "\t" + i["name"])

print("\n\n\n\n\nzip")
for i in r_zip("11355"):
    print (str(i["_id"]) + "\t" + i["name"])
