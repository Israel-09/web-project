#!/usr/bin/env python3
"""_summary_
"""
from newsapi import NewsApiClient
from pprint import pprint
import dotenv
import os
from flask import Flask, render_template, jsonify, request
from flask_cors import CORS


dotenv.load_dotenv(override=True)

api  = NewsApiClient(api_key=os.getenv('API'))
app = Flask(__name__)
CORS(app)



@app.route('/top_headlines', methods=['GET', 'POST'])
def greet():
    country = request.get_json().get('country')
    print(country)
    response = api.get_top_headlines(country=country)
    return jsonify(response)

if __name__ == '__main__':
    app.run(debug=True, port=5000, host='0.0.0.0')
