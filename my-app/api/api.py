from flask import Flask, render_template, url_for, request, redirect
from datetime import datetime

app = Flask(__name__)

@app.route('/cellphone-list', methods=['POST', 'GET'])
def index():
    return {
        'cellphoneArray': [
            {
                'id': 1,
                'brand': 'Apple',
                'model': 'Iphone 5',
                'memory': '2',
                'releaseDate': '15/01/2015'
            },
            {
                'id': 2,
                'brand': 'Apple',
                'model': 'Iphone 6',
                'memory': '3',
                'releaseDate': '15/01/2016'
            }
        ]
    }


@app.route('/delete/<int:id>')
def delete(id):
    return {'text': 'oops'}


@app.route('/update/<int:id>', methods=['GET', 'POST'])
def update(id):
    return {'text': 'oops'}

if __name__ == '__main__':
    app.run(debug = True)