from flask import *
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

app = Flask(__name__)
swagger = Swagger(app)

name_space = '/websocket'  
# socketio = SocketIO()
# connected_sids = set()  # 存放已连接的客户端
sockets = Sockets()

def init_settings():
    app.config.from_object(configs['database'])
    app.config.from_object(configs['development'])
    app.config.from_object(configs['testing'])
    app.config.from_object(configs['default'])
    db.init_app(app)
    app.register_blueprint(users_dp)
    app.register_blueprint(drugs_dp)
    app.register_blueprint(search_dp)
    app.register_blueprint(scan_dp)
    app.register_blueprint(query_dp)
    sockets.init_app(app)
    # socketio.init_app(app,cors_allowed_origins='*')
    

# Cross-domain
@app.after_request
def cors(environ):
    environ.headers['Access-Control-Allow-Origin']='*'
    environ.headers['Access-Control-Allow-Method']='*'
    environ.headers['Access-Control-Allow-Headers']='x-requested-with,content-type'
    return environ 

# 测试添加数据库记录函数
def add_database_rules():
    with app.app_context():  
        db.drop_all()  # 删除所有表 
        db.create_all()
        user1 = User(name = '张三', identity = 'client', active = True, telephone = '18860184392', bindTelephone='',
                    password="12424141", isApplied = False, isReceived=False, ack=False)
        user2 = User(name = '李四', identity = 'server', active = True, telephone = '19860234392', bindTelephone='',
                    password="12424141", isApplied = False, isReceived=False, ack=False)
        db.session.add_all([user1, user2])
        db.session.commit()
        dg1 = DrugModel(name='感冒灵',desc='治疗感冒', manufacturedate='2022-10-1',duedate='2024-10-1', owner=1, img='app/static/images/1.jpg'
                        ,clockFlags='0000',clockTime='0000080012001800',weekFrequency='0000000',telephone='18860184392')
        dg2 = DrugModel(name='热清灵颗粒',desc='去火', manufacturedate='2022-10-2',duedate='2022-11-1', owner=1, img='app/static/images/2.jpg'
                        ,clockFlags='0000',clockTime='0000080012001800',weekFrequency='0000000',telephone='18860184392')
        dg3 = DrugModel(name='福尔马林',desc='防腐', manufacturedate='2022-10-3',duedate='2022-10-5', owner=2, img='app/static/images/3.jpg'
                        ,clockFlags='0000',clockTime='0000080012001800',weekFrequency='0000000', telephone = '19860234392')
        dg4 = DrugModel(name='阿司匹林',desc='止痛药', manufacturedate='2022-10-4',duedate='2024-10-4', owner=2, img='app/static/images/4.jpg'
                        ,clockFlags='0000',clockTime='0000080012001800',weekFrequency='0000000', telephone = '19860234392')
        dg5 = DrugModel(name='枸橼酸钠',desc='治疗肾结石', manufacturedate='2022-10-4',duedate='2024-10-4', owner=1, img='app/static/images/4.jpg'
                        ,clockFlags='0000',clockTime='0000080012001800',weekFrequency='0000000',telephone='18860184392')
        dg6 = DrugModel(name='双氯芬酸钠',desc='解热镇痛', manufacturedate='2022-10-4',duedate='2022-11-10', owner=1, img='app/static/images/4.jpg'
                        ,clockFlags='0000',clockTime='0000080012001800',weekFrequency='0000000',telephone='18860184392')
        dg7 = DrugModel(name='盐酸坦索罗缓释胶囊',desc='治疗前列腺炎', manufacturedate='2022-10-4',duedate='2022-10-10', owner=2, img='app/static/images/4.jpg'
                        ,clockFlags='0000',clockTime='0000080012001800',weekFrequency='0000000', telephone = '19860234392')
        dg8 = DrugModel(name='布洛芬缓释胶囊',desc='止痛药', manufacturedate='2022-10-4',duedate='2024-10-4', owner=2, img='app/static/images/4.jpg'
                        ,clockFlags='0000',clockTime='0000080012001800',weekFrequency='0000000', telephone = '19860234392')
        db.session.add_all([dg1,dg2,dg3,dg4, dg5, dg6, dg7, dg8])
        db.session.commit() 

@sockets.route('/websocket')
def communicate(ws):
    while not ws.closed:
        msg = ws.receive()
        res = json.loads(msg)
        print(res)
        telephone = res['telephone']
        print(telephone)
        server_user = User.query.filter_by(bindTelephone=telephone).first()
        client_user = User.query.filter_by(telephone=telephone).first()
        print(server_user)
        print(client_user)
        if client_user.isReceived and server_user.isApplied:
            """ result = {
                'code' : 200,
                'msg' : '绑定申请',
                'originTelephone' : server_user.telephone
            }
            ws.send(jsonify(result)) """
            ws.send(str(server_user.telephone))
            # print(f'i sent:{now}')
            time.sleep(1)
    return 


@app.route('/')
def index():
    return 'hello index'

if __name__ == '__main__':
    init_settings()
    # add_database_rules()
    # socketio.run(app, host='0.0.0.0', port=5000, debug = True)
    # app.run(host='0.0.0.0', port=5000, debug = True)     
    server = pywsgi.WSGIServer(('0.0.0.0',5000), application=app, handler_class=WebSocketHandler)
    print('server started')
    server.serve_forever()

