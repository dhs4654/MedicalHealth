from flask import Blueprint, request, jsonify
from flask_restful import Api, Resource
import requests, json
from . import Query
from . import views
from . import query_dp

api = Api(query_dp)

class queryView(Resource):
    def get(self):
        data = request.values.get("question")     
        res = Query.query(data)
        res['status'] = 200
        return res
    
    def post(self):
        return self.get()
        

api.add_resource(queryView, '/question')