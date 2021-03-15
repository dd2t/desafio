from flask import Flask, render_template, url_for, request, redirect
from datetime import datetime

app = Flask(__name__)

@app.route('/', methods=['POST', 'GET'])
def index():
    return {'text': 'oops'}


@app.route('/delete/<int:id>')
def delete(id):
    return {'text': 'oops'}


@app.route('/update/<int:id>', methods=['GET', 'POST'])
def update(id):
    return {'text': 'oops'}

if __name__ == '__main__':
    app.run(debug = True)