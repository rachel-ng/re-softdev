import pymongo
SERVER_ADDR = "167.99.13.106"
connection = pymongo.MongoClient(SERVER_ADDR)
db = connection.test
collection = db.restaurants

def r_borough (borough):
    return [_id for restaurant in db.restaurants.find({"borough": borough})]

def r_zip (zipcode):
    return [restaurant for restaurant in db.restaurants.find({"address.zip": zipcode})]

def r_zip_grade (zipcode, grade):
    return [restaurant for restaurant in db.restaurants.find({"address.zip":zipcode},{"grades.grade": grade})]

def r_zip_thresh (zipcode, thresh):
    return [restaurant for restaurant in db.restaurants.find({"address.zip":zipcode},{"grades.score": {"$lt": thresh}})]

print(r_borough("Queens"))
print(r_zip("11355"))


#All restaurants in a specified borough.
#All restaurants in a specified zip code.
#All restaurants in a specified zip code and with a specified grade.
#All restaurants in a specified zip code with a score below a specified threshold.
#Something more clever.
