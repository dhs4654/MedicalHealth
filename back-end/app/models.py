from flask import Flask
from flask_sqlalchemy import SQLAlchemy

 
db = SQLAlchemy()
class DrugModel(db.Model):
    __tablename__ = 'DrugLibrary'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String(128), comment = '药品名')
    desc = db.Column(db.String(128), comment = '简介')
    manufacturedate = db.Column(db.String(128), comment = '生产日期')
    duedate = db.Column(db.String(128), comment = '截止日期')
    owner = db.Column(db.Integer, comment = '药库所属')
    img = db.Column(db.String(128), comment='图片')
    clockFlags = db.Column(db.String(128), comment = '闹钟状态')
    clockTime = db.Column(db.String(128), comment = '闹钟时间')
    weekFrequency = db.Column(db.String(128), comment = '周频率')
    telephone = db.Column(db.String(128), comment = '电话')
    
    def __repr__(self):
        return 'Drug : %s'% self.name


class User(db.Model):
    __tablename__ = 'Users'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String(128), comment = '用户名')
    ''' client or server '''
    identity = db.Column(db.String(128), comment = '用户身份')   
    active = db.Column(db.Boolean, comment = '登录状态')
    telephone = db.Column(db.String(128), comment = '电话')
    bindTelephone = db.Column(db.String(128), comment = '绑定账号电话')
    password = db.Column(db.String(128), comment = '密码')
    isApplied = db.Column(db.Boolean, comment = '是否申请绑定')
    isReceived = db.Column(db.Boolean, comment = '是否收到绑定申请')
    ack = db.Column(db.Boolean, comment = '确认绑定')
    
    def __repr__(self):
        return 'User : %s'% self.name
