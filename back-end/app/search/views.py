from flask import Blueprint, request, jsonify
from flask_restful import Api, Resource
import requests, json

from . import views
from . import search_dp

api = Api(search_dp)

class searchView(Resource):
    def get(self):
        data = request.values.get("info")
        headers = {
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.132 Safari/537.36',
            'Referer':  'https://api.v1.data5u.com'
        }       
        domain = "https://api.v1.data5u.com";
        apiUrl = "/medicle/by-name";
        params = {"appsec":"29bb9b12c0d342c7f6204eaa47d708bc","name":data,"page":"1","size":"1"}
        res = requests.post(domain + apiUrl, params, headers=headers).content.decode()
        res = json.loads(res)
        # print(res)
        return res
    
    def post(self):
        return self.get()
        

api.add_resource(searchView, '/info')