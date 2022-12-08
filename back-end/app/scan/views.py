from flask import Blueprint, request, jsonify
from flask_restful import Api, Resource
import requests, json
from . import views
from . import scan_dp
import json
import datetime
import time
from config import configs
from app.models import db, DrugModel, User
from app.drugLibrary import drugs_dp
from app.user import users_dp
from app.search import search_dp
from app.scan import scan_dp
from app.query import query_dp
from flasgger import Swagger,swag_from
# from flask_socketio import SocketIO, emit
from flask_sockets import Sockets
from gevent import pywsgi
from geventwebsocket.handler import WebSocketHandler


api = Api(scan_dp)

class scanView(Resource):
    def get(self):
        pass
    
    def post(self):
        return self.get()
        

api.add_resource(scanView, '/code')