from flask import Flask, render_template, url_for, request, redirect
import pymongo
from pymongo import MongoClient
import passwd

app = Flask(__name__)


# Database

cluster = pymongo.MongoClient(f"mongodb+srv://dd2t:{passwd.pwd()}@cluster0.jy3il.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
db = cluster["desafio"]
collection = db["cellphone"]


# startDB = [
#     {
#         '_id': 0,
#         'brand': 'Apple',
#         'model': 'Iphone 5',
#         'memory': '2',
#         'releaseDate': '2021-04-03'
#     },
#     {
#         '_id': 1,
#         'brand': 'Pineapple',
#         'model': 'Honeycomb 3',
#         'memory': '42',
#         'releaseDate': '2021-12-21'
#     },
#     {
#         '_id': 2,
#         'brand': 'Mapple',
#         'model': 'Melon 7',
#         'memory': '88',
#         'releaseDate': '2042-01-11'
#     }
# ]

# Create
# collection.insert_one(phones[2])
# collection.insert_many(startDB)
# Read
# collection.find_one({'_id': var})
# collection.find()





# Routes
@app.route('/cellphone-list', methods=['GET'])
def index():
    phones = []
    for doc in collection.find():
        phones.append(doc)
    
    return {
        'cellphoneArray': phones
    }


@app.route('/delete', methods=['DELETE'])
def delete():
    phone = request.get_json()
    # for i in phones:
    #     if i['model'] == phone['model']:
    #         phones.remove(phone)
    #         phones[phones.index(i)] = phone
    #         break
    collection.delete_one({'model': phone['model']})
    return redirect('/')

def newPhone(element, id):
    return {
        '_id': id,
        'brand': element['brand'],
        'model': element['model'],
        'memory': element['memory'],
        'releaseDate': element['releaseDate']
    }

@app.route('/update', methods=['GET', 'POST'])
def update():
    # editing = False
    if request.method == 'POST':
        phone = request.get_json()
        # for i in phones:
        #     if i['model'] == phone['model']:
        #         phones[phones.index(i)] = phone
        #         editing = True
        #         break
        # if not editing:
        #     phones.append(phone)
        found = collection.find_one({'model': phone['model']})
        if None == found:
            found = collection.find_one({'$query': {}, '$orderby':{'_id':-1}})
            collection.insert_one(newPhone(phone, found['_id']+1))
        else:
            collection.replace_one(found, phone)
    return redirect('/')

if __name__ == '__main__':
    app.run(debug = True)