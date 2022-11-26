import random
from datetime import datetime
from flask import Blueprint, request, jsonify
from flask_restful import Api, Resource
from app.models import User, db
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
                'id': user.id,
                'name': user.name,
                'identity': user.identity,
                'active': user.active,
                'telephone': user.telephone,
                'clockFlags': user.clockFlags,
                'clockTime': user.clockTime,
                'weekFrequency': user.weekFrequency
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
        clockFlags = args.get('clockFlags')
        clockTime = args.get('clockTime')
        weekFrequency = args.get('weekFrequency')
        
        if not all([name, identity, active, telephone, clockFlags, clockTime, weekFrequency]):
            return jsonify({
                                'code': 400, 
                                'msg': '参数不完整'
                            })
        users = User(name=name, identity=identity, active=active, 
                    telephone=telephone, clockFlags=clockFlags, clockTime=clockTime,weekFrequency=weekFrequency)
        db.session.add(users)
        db.session.commit()
        return jsonify({
                            'code': 200, 
                            'msg': '添加成功'
                        })
 
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
                'clockFlags': users_info.clockFlags,
                'clockTime': users_info.clockTime,
                'weekFrequency': users_info.weekFrequency
            }
        })
    # 修改一条用户
    def put(self, id):
        
        args = request.json
        name = args.get('name')
        identity = args.get('identity')
        active = args.get('active')
        telephone = args.get('telephone')
        clockFlags = args.get('clockFlags')
        clockTime = args.get('clockTime')
        weekFrequency = args.get('weekFrequency')

        users_info = User.query.get(id)
        
        if not users_info:
            return jsonify({
                                'code': 400, 
                                'msg': '用户不存在'
                           })

         # 字段值不为空,且修改后的值发生改变 才进行修改
        if name and name != users_info.name:    
            users_info.name = name
        if identity and identity != users_info.identity:
            users_info.identity = identity
        if active and active != users_info.active:
            users_info.active = active
        if telephone and telephone != users_info.telephone:
            users_info.telephone = telephone
        if clockFlags and clockFlags != users_info.clockFlags:
            users_info.clockFlags = clockFlags
        if clockTime and clockTime != users_info.clockTime:
            users_info.clockTime = clockTime
        if weekFrequency and weekFrequency != users_info.weekFrequency:
            users_info.weekFrequency = weekFrequency
        
        db.session.commit()
        return jsonify({
                            'code': 200, 
                            'msg': '修改成功'
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
api.add_resource(upLoadView, '/upload')
