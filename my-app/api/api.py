from flask import Flask, render_template, url_for, request, redirect
from datetime import datetime

app = Flask(__name__)

phones = [
    {
        'brand': 'Apple',
        'model': 'Iphone 5',
        'memory': '2',
        'releaseDate': '15-01-2015'
    },
    {
        'brand': 'Pineapple',
        'model': 'Honeycomb 3',
        'memory': '42',
        'releaseDate': '21-07-2016'
    },
    {
        'brand': 'Mapple',
        'model': 'Melon 7',
        'memory': '88',
        'releaseDate': '16-03-2021'
    }
]

@app.route('/cellphone-list', methods=['POST', 'GET'])
def index():
    return {
        'cellphoneArray': phones
    }


@app.route('/delete/<int:id>')
def delete(id):
    return {'text': 'oops'}


@app.route('/update', methods=['GET', 'POST'])
def update():
    if request.method == 'POST':
        phones.append(request.get_json())
    return redirect('/')

if __name__ == '__main__':
    app.run(debug = True)