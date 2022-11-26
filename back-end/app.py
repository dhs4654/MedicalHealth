from flask import *
import json
from config import configs
from app.models import db, DrugModel, User
from app.drugLibrary import drugs_dp
from app.user import users_dp
from app.search import search_dp
from app.scan import scan_dp
from flasgger import Swagger,swag_from

app = Flask(__name__)
swagger = Swagger(app)
def init_settings():
    app.config.from_object(configs['database'])
    app.config.from_object(configs['development'])
    app.config.from_object(configs['testing'])
    app.config.from_object(configs['default'])
    db.init_app(app)
    app.register_blueprint(drugs_dp)
    app.register_blueprint(search_dp)
    app.register_blueprint(scan_dp)
    

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
        user1 = User(name = '张三', identity = 'client', active = True, telephone = '18860184392', 
                    clockFlags='0000',clockTime='0000080012001800',weekFrequency='0000000')
        user2 = User(name = '李四', identity = 'server', active = True, telephone = '19860234392', 
                    clockFlags='0000',clockTime='0000080012001800',weekFrequency='0000000')
        db.session.add_all([user1, user2])
        db.session.commit()
        dg1 = DrugModel(name='感冒灵',desc='治疗感冒', manufacturedate='2022-10-1',duedate='2024-10-1', owner=0, img='app/static/images/1.jpg')
        dg2 = DrugModel(name='热清灵颗粒',desc='去火', manufacturedate='2022-10-2',duedate='2024-10-2', owner=0, img='app/static/images/2.jpg')
        dg3 = DrugModel(name='福尔马林',desc='防腐', manufacturedate='2022-10-3',duedate='2024-10-3', owner=0, img='app/static/images/3.jpg')
        dg4 = DrugModel(name='阿司匹林',desc='止痛药', manufacturedate='2022-10-4',duedate='2024-10-4', owner=0, img='app/static/images/4.jpg')
        db.session.add_all([dg1,dg2,dg3,dg4])
        db.session.commit() 


@app.route('/login', methods=['GET'])
def login():
    # 获取前端json数据
    data = request.get_data()
    # 给前端传输json数据
    return 'hello'



@app.route('/hello')
def hello():
    return 'Hello World'

@app.route('/')
def index():
    return 'hello index'

if __name__ == '__main__':
    init_settings()
    # add_database_rules()
    app.run(host='0.0.0.0', port=5000, debug = True)     
