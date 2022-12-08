import random
from datetime import datetime
from flask import Blueprint, request, jsonify
from flask_restful import Api, Resource
from app.models import User, DrugModel, db
from . import views
from . import users_dp

# users_dp = Blueprint('users_dp', __name__, url_prefix='/userLibrary')

api = Api(users_dp)


class usersView(Resource):
    # 查看所有用户
    def get(self):
        users_list = User.query.all()     # 获取所有对象
        users_all = []
        for user in users_list:
            data = {
                'name': user.name,
                'identity': user.identity,
                'active': user.active,
                'telephone': user.telephone,
                'bindTelephone': user.bindTelephone,
                'password': user.password,
                'isApplied': user.isApplied,
                'isReceived': user.isReceived,
                'ack': user.ack
            }
            users_all.append(data)
        return jsonify({
                            'code': 200, 
                            'msg': '用户列表获取成功',
                            'data': users_all
                        })
    # 添加
    def post(self):
        args = request.json
        name = args.get('name')
        identity = args.get('identity')
        active = args.get('active')
        telephone = args.get('telephone')
        bindTelephone = args.get('bindTelephone')
        password = args.get('password')
        isApplied = args.get('isApplied')
        isReceived = args.get('isReceived')
        ack =  args.get('ack')
        if not all([name, identity, active, telephone, bindTelephone, password]):
            return jsonify({
                                'code': 400, 
                                'msg': '参数不完整'
                            })
        users = User(name=name, identity=identity, active=active, telephone=telephone, bindTelephone=bindTelephone,
                    password=password, isApplied=isApplied,isReceived=isReceived, ack=ack)
        db.session.add(users)
        db.session.commit()
        user_id = self.getUserByTelephone(telephone)
        return jsonify({
                            'code': 200, 
                            'id': user_id,
                            'msg': '添加成功'
                        })
    
    def getUserByTelephone(self, telephone):
        user = User.query.filter_by(telephone=telephone).first()
        return user.id

class usersInfoView(Resource):
    # 获取一条对象
    def get(self, id):
        users_info = User.query.get(id)   
        if not users_info:
            return jsonify({
                                'code': 400, 
                                'msg': '用户不存在'
                            })
        return jsonify({
            'code': 200,
            'msg': '用户获取成功',
            'data': {
                'id': users_info.id,
                'name': users_info.name,
                'identity': users_info.identity,
                'active': users_info.active,
                'telephone': users_info.telephone,
                'bindTelephone': users_info.bindTelephone,
                'password': users_info.password,
                'isApplied': users_info.isApplied,
                'isReceived': users_info.isReceived,
                'ack': users_info.ack
            }
        })
    # 修改一条用户
    def put(self, id):
        
        args = request.json
        
        name = args.get('name')
        identity = args.get('identity')
        active = args.get('active')
        telephone = args.get('telephone')
        bindTelephone = args.get('bindTelephone')
        password = args.get('password')
        isApplied = args.get('isApplied')
        isReceived = args.get('isReceived')
        ack =  args.get('ack')

        users_info = User.query.get(id)
        
        if not users_info:
            return jsonify({
                                'code': 400, 
                                'msg': '用户不存在'
                           })
        if not name:
            name = users_info.name
        if not identity:
            identity = users_info.identity
        if not bindTelephone:
            bindTelephone = users_info.bindTelephone
         # 字段值不为空,且修改后的值发生改变 才进行修改
        if name and name != users_info.name:    
            users_info.name = name
        if identity and identity != users_info.identity:
            users_info.identity = identity
        if active and active != users_info.active:
            users_info.active = active
        if telephone and telephone != users_info.telephone:
            users_info.telephone = telephone
        if bindTelephone and bindTelephone != users_info.bindTelephone:
            users_info.bindTelephone = bindTelephone
        if password and password != users_info.password:
            users_info.password = password
        if isApplied and isApplied != users_info.isApplied:
            users_info.isApplied = isApplied
        if isReceived and isReceived != users_info.isReceived:
            users_info.isReceived = isReceived
        if ack and ack != users_info.ack:
            users_info.ack = ack
        res = {
            'name' : name,
            'identity': identity,
            'bindTelephone': bindTelephone
        }
        
        db.session.commit()
        return jsonify({
                            'code': 200, 
                            'msg': '修改成功',
                            'data': res
                        })
    # 删除一条数据
    def delete(self, id):
        
        users_info = User.query.get(id)
        
        if not users_info:
            return jsonify({    
                                'code': 400, 
                                'msg': '用户不存在'
                            })
        User.query.filter(User.id == id).delete()
        
        db.session.commit()
        return jsonify({
                            'code': 200, 
                            'msg': '删除成功'
                        })
# 服务端发起电话绑定请求
class usersBindView(Resource):
    def put(self):
        args = request.json
        telephone = args.get('telephone')  # server
        bindTelephone = args.get('bindTelephone')  # client

        if not bindTelephone:
            return jsonify({
                                'code': 400, 
                                'msg': '请传入对方电话'
                           })
        server_user = User.query.filter_by(telephone=telephone).first()
        client_user = User.query.filter_by(telephone=bindTelephone).first()
        if not client_user:
            return jsonify({
                                'code': 400, 
                                'msg': '需要绑定的用户不存在'
                           })
        if client_user.identity != 'client':
            return jsonify({
                                'code': 400, 
                                'msg': '请确认正确的绑定对象'
                           })
        server_user.isApplied = True
        server_user.bindTelephone = client_user.telephone
        client_user.isReceived = True
        db.session.commit()
        return jsonify({
                            'code': 200, 
                            'msg': '已发送绑定请求, 请等待对方确实',
                        })

# 客户端发回确认绑定请求
class usersAckView(Resource):

    def put(self):
        args = request.json
        telephone = args.get('telephone') # client
        bindTelephone = args.get('bindTelephone') # server

        if not bindTelephone:
            return jsonify({
                                'code': 400, 
                                'msg': '请传入对方电话'
                           })
        server_user = User.query.filter_by(telephone=bindTelephone).first()
        client_user = User.query.filter_by(telephone=telephone).first()

        if not server_user:
            return jsonify({
                                'code': 400, 
                                'msg': '该用户不存在'
                           })

        if server_user.identity != 'server':
            return jsonify({
                                'code': 400, 
                                'msg': '请确认正确的绑定对象'
                           })
        
        server_user.ack = True
        server_user.isApplied = False
        client_user.bindTelephone = bindTelephone
        client_user.ack = True
        client_user.isReceived = False

        db.session.commit()
        return jsonify({
                            'code': 200, 
                            'msg': '确认绑定成功',
                        })
# 根据电话获取用户
class userGetByTelephoneView(Resource):
     def get(self, telephone):
        user = User.query.filter_by(telephone=telephone).first()
    
        if not user:
            return jsonify({    
                                'code': 400, 
                                'msg': '用户不存在'
                            })
        res = {
            'id': user.id,
            'name': user.name,
            'active': user.active,
            'identity': user.identity,
            'telephone': user.telephone,
            'bindTelephone': user.bindTelephone,
            'password': user.password,
            'isApplied': user.isApplied,
            'isReceived': user.isReceived,
            'ack': user.ack
        }
        return jsonify({
                            'code': 200, 
                            'msg': '用户获取成功',
                            'data': res
                        })
     def post(self, telephone):
        return self.get(telephone)

# 上传图片
class upLoadView(Resource):
    def post(self):
        img = request.files.get('img')
        filename = datetime.strftime(datetime.now(), '%Y%m%d%H%M%S')
        filename += str(random.randint(100000, 999999))
        filename += '.'
        filename += img.filename.split('.')[-1]
 
        img.save('app/static/images/%s' % filename)
        return jsonify({
                            'code': 200, 
                            'msg': '文件上传成功',
                            'data': {'filename': 'static/%s' % filename}
                        })
 
 
api.add_resource(usersView, '/users')
api.add_resource(usersInfoView, '/users/<int:id>')
api.add_resource(userGetByTelephoneView, '/getByTelephone/<string:telephone>')
api.add_resource(usersBindView, '/bind')
api.add_resource(usersAckView, '/ack')
api.add_resource(upLoadView, '/upload')
