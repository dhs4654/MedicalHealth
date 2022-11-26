from flask import Blueprint, request, jsonify
from flask_restful import Api, Resource
import requests, json
from . import views
from . import scan_dp

api = Api(scan_dp)

class scanView(Resource):
    def get(self):
        pass
    
    def post(self):
        return self.get()
        

api.add_resource(scanView, '/code')