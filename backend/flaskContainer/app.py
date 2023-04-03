from flask import Flask, request, jsonify
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.sql import text
from flask_cors import CORS

app = Flask(__name__)

# 设置数据库连接地址
DB_URI = 'mysql+pymysql://root:123456@localhost:3306/flask'
app.config['SQLALCHEMY_DATABASE_URI'] = DB_URI
# 是否追踪数据库修改，开启会影响性能
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
# 显示执行的底层SQL语句
app.config['SQLALCHEMY_ECHO'] = True
# 初始化数据库
db = SQLAlchemy(app)
# 设置jwt的密钥
app.config['SECRET_KEY'] = 'super-secret'
# 初始化jwt
jwt = JWTManager(app)

class user(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String, unique=True, nullable=True)
    password = db.Column(db.String, nullable=True)
    role = db.Column(db.String, nullable=True)
    avatar = db.Column(db.String, nullable=False)
    created_at = db.Column(db.DateTime, nullable=True)

@app.route('/user/login', methods=['POST'])
def login():
    username = request.get_json()['username']
    password = request.get_json()['password']
    result = db.session.execute(db.select(user).where(user.username == username).where(user.password == password)).scalar()
    if(result == None):
        return jsonify({'code': 400, 'msg': '用户名或密码错误'})
    # 生成token
    try:
        payload = {
            'name': result.username,
            'avatar': result.avatar,
            'role': result.role
        }
        return jsonify({
            'code': 200,
            'msg': '登录成功',
            'data': {
                'token': create_access_token(identity=payload)
                }
            })
    except Exception as e:
        return jsonify({'code': 400, 'msg': '登录失败', 'data': {'msg': '登录失败'}})

@app.route('/user/info')
@jwt_required()
def info():
    decode_user = get_jwt_identity()
    return jsonify({'code': 200, 'msg': '获取用户信息成功', 'data': decode_user})

@app.route('/user/logout')
def logout():
    return jsonify({'code': 200, 'msg': '退出成功','data': {'msg': '退出成功'}})

if __name__ == '__main__':
    # 设置跨域访问
    CORS(app, supports_credentials=True)
    CORS(app, resources=r'/*')
    app.run(debug=True,port=8080)