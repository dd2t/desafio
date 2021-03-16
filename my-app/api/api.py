from flask import Flask, render_template, url_for, request, redirect
from datetime import datetime

app = Flask(__name__)

phones = [
    {
        'brand': 'Apple',
        'model': 'Iphone 5',
        'memory': '2',
        'releaseDate': '2021-04-03'
    },
    {
        'brand': 'Pineapple',
        'model': 'Honeycomb 3',
        'memory': '42',
        'releaseDate': '2021-12-21'
    },
    {
        'brand': 'Mapple',
        'model': 'Melon 7',
        'memory': '88',
        'releaseDate': '2042-01-11'
    }
]

@app.route('/cellphone-list', methods=['POST', 'GET'])
def index():
    return {
        'cellphoneArray': phones
    }


@app.route('/delete', methods=['DELETE'])
def delete():
    phone = request.get_json()
    for i in phones:
        if i['model'] == phone['model']:
            phones.remove(phone)
            phones[phones.index(i)] = phone
            break
    return redirect('/')


@app.route('/update', methods=['GET', 'POST'])
def update():
    editing = False
    if request.method == 'POST':
        phone = request.get_json()
        for i in phones:
            if i['model'] == phone['model']:
                phones[phones.index(i)] = phone
                editing = True
                break
        if not editing:
            phones.append(phone)
    return redirect('/')

if __name__ == '__main__':
    app.run(debug = True)