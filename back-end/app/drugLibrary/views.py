import random
from datetime import datetime
from flask import Blueprint, request, jsonify
from flask_restful import Api, Resource
from app.models import DrugModel, db
from . import views
from . import drugs_dp
# drugs_dp = Blueprint('drugs_dp', __name__, url_prefix='/drugLibrary')
 
api = Api(drugs_dp)
 
 
class drugsView(Resource):
    # 查看所有药品
    def get(self):
        drugs_list = DrugModel.query.all()     # 获取所有对象
        drugs_all = []
        for drug in drugs_list:
            data = {
                'id': drug.id,
                'name': drug.name,
                'desc': drug.desc,
                'manufacturedate': drug.manufacturedate,
                'duedate': drug.duedate,
                'owner': drug.owner,
                # 'img': request.scheme + '://' + request.host + '/' + drug.img,
                #   协议 + :// + 主机地址 + / + 图片名
                # 'img': '%s://%s/%s' % (request.scheme, request.host, drug.img)
                'img': 'http://127.0.0.1:5000/' + drug.img
            }
            drugs_all.append(data)
        return jsonify({
                            'code': 200, 
                            'msg': '药品列表获取成功',
                            'data': drugs_all
                        })
    # 添加
    def post(self):
        args = request.json
        name = args.get('name')
        desc = args.get('desc')
        manufacturedate = args.get('manufacturedate')
        duedate = args.get('duedate')
        owner = args.get('owner')
        img = args.get('img')
        
        if not all([name, desc, manufacturedate, duedate, owner, img]):
            return jsonify({
                                'code': 400, 
                                'msg': '参数不完整'
                            })
        drugs = DrugModel(name=name, desc=desc,manufacturedate=manufacturedate,duedate=duedate, owner=owner, img=img)
        db.session.add(drugs)
        db.session.commit()
        return jsonify({    
                            'code': 200, 
                            'msg': '添加成功'
                        })
 
class drugsInfoView(Resource):
    # 获取一条药品
    def get(self, id):
        drugs_info = DrugModel.query.get(id)   # 获取一条对象
        if not drugs_info:
            return jsonify({'code': 400, 'msg': '药品不存在'})
        return jsonify({
            'code': 200,
            'msg': '药品获取成功',
            'data': {
                'id': drugs_info.id,
                'name': drugs_info.name,
                'desc': drugs_info.desc,
                'manufacturedate': drugs_info.manufacturedate,
                'duedate': drugs_info.duedate,
                'owner': drugs_info.owner,
                'img': '%s://%s/%s' % (request.scheme, request.host, drugs_info.img),
            }
        })
    # 修改一条药品
    def put(self, id):
        
        args = request.json
        name = args.get('name')
        desc = args.get('desc')
        manufacturedate = args.get('manufacturedate')
        duedate = args.get('duedate')
        owner = args.get('owner')
        img = args.get('img')
 
        drugs_info = DrugModel.query.get(id)
        
        if not drugs_info:
            return jsonify({
                                'code': 400, 
                                'msg': '药品不存在'
                            })

         # 字段值不为空,且修改后的值发生改变 才进行修改
        if name and name != drugs_info.name:    
            drugs_info.name = name
        if desc and desc != drugs_info.desc:
            drugs_info.desc = desc
        if manufacturedate and manufacturedate != drugs_info.manufacturedate:
            drugs_info.manufacturedate = manufacturedate
        if duedate and duedate != drugs_info.duedate:
            drugs_info.duedate = duedate
        if owner and owner != drugs_info.owner:
            drugs_info.owner = owner
        if img and img != drugs_info.img:
            drugs_info.img = img

        db.session.commit()
        return jsonify({
                            'code': 200, 
                            'msg': '修改成功'
                        })
    # 删除一条数据
    def delete(self, id):
        
        drugs_info = DrugModel.query.get(id)
        
        if not drugs_info:
            return jsonify({
                                'code': 400, 
                                'msg': '药品不存在'
                            })
        DrugModel.query.filter(DrugModel.id == id).delete()
        
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
 
 
api.add_resource(drugsView, '/drugs')
api.add_resource(drugsInfoView, '/drugs/<int:id>')
api.add_resource(upLoadView, '/upload')
