from flask import Flask, render_template, url_for, request, redirect
import pymongo
from pymongo import MongoClient
# import passwd

app = Flask(__name__, static_folder='../build', static_url_path='/')


# Database
cluster = pymongo.MongoClient(f"mongodb+srv://dd2t:1234@cluster0.jy3il.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
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

# Routes
@app.route('/')
def index():
    return app.send_static_file('index.html')

@app.errorhandler(404)
def not_found(e):
    return app.send_static_file('index.html')

@app.route('/cellphone-list', methods=['GET'])
def sendList():
    phones = []
    for doc in collection.find():
        phones.append(doc)
    
    return {
        'cellphoneArray': phones
    }


@app.route('/delete', methods=['DELETE'])
def delete():
    phone = request.get_json()
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
    if request.method == 'POST':
        phone = request.get_json()
        oldPhone = collection.find_one({'model': phone['model']})

        if None == oldPhone:
            oldPhone = collection.find_one({'$query': {}, '$orderby':{'_id':-1}})
            collection.insert_one(newPhone(phone, oldPhone['_id']+1))
        else:
            collection.replace_one(oldPhone, phone)

    return redirect('/')

if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=False, port=os.environ.get('PORT',80))