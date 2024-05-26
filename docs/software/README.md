# Реалізація інформаційного та програмного забезпечення

```SQL
CREATE DATABASE mydb; 
USE mydb;
CREATE TABLE Role (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(32) NOT NULL
);

CREATE TABLE Permission (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(32) NOT NULL
);

CREATE TABLE User (
    id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(45) NOT NULL,
    last_name VARCHAR(45) NOT NULL,
    nick_name VARCHAR(45),
    email VARCHAR(128) NOT NULL,
    password VARCHAR(64) NOT NULL,
    Role_id INT,
    FOREIGN KEY (Role_id) REFERENCES Role(id)
);

CREATE TABLE `Grant` (
    id INT PRIMARY KEY AUTO_INCREMENT,
    appoin_td DATE NOT NULL,
    Role_id INT,
    Permission_id INT,
    FOREIGN KEY (Role_id) REFERENCES Role(id),
    FOREIGN KEY (Permission_id) REFERENCES Permission(id)
);

CREATE TABLE Survey (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(45) NOT NULL,
    description LONGTEXT,
    created DATE NOT NULL,
    User_id INT,
    User_Role_id INT,
    FOREIGN KEY (User_id) REFERENCES User(id)
);

CREATE TABLE Question (
    id INT PRIMARY KEY AUTO_INCREMENT,
    text LONGTEXT NOT NULL,
    type VARCHAR(32) NOT NULL,
    Survey_id INT,
    Survey_User_id INT,
    Survey_User_Role_id INT,
    FOREIGN KEY (Survey_id) REFERENCES Survey(id)
);

CREATE TABLE Answer (
    id INT PRIMARY KEY AUTO_INCREMENT,
    text LONGTEXT NOT NULL,
    User_id INT,
    User_Role_id INT,
    Question_id INT,
    Question_Survey_id INT,
    Question_Survey_User_id INT,
    Question_Survey_User_Role_id INT,
    FOREIGN KEY (User_id) REFERENCES User(id),
    FOREIGN KEY (Question_id) REFERENCES Question(id)
);

CREATE TABLE State (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(32) NOT NULL
);

CREATE TABLE Action (
    id INT PRIMARY KEY AUTO_INCREMENT,
    date DATE NOT NULL,
    Survey_id INT,
    Survey_User_id INT,
    Survey_User_Role_id INT,
    Role_id INT,
    State_id INT,
    FOREIGN KEY (Survey_id) REFERENCES Survey(id),
    FOREIGN KEY (Role_id) REFERENCES Role(id),
    FOREIGN KEY (State_id) REFERENCES State(id)
);
```
# RESTfull сервіс 
## app.py
``` Python
from flask import Flask, jsonify, request
import random
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:1234@localhost:3307/mydb'

db = SQLAlchemy(app)

class Role(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(32), nullable=False)

class Permission(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(32), nullable=False)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(45), nullable=False)
    last_name = db.Column(db.String(45), nullable=False)
    nick_name = db.Column(db.String(45))
    email = db.Column(db.String(128), nullable=False)
    password = db.Column(db.String(64), nullable=False)
    role_id = db.Column(db.Integer, db.ForeignKey('role.id'))
    role = db.relationship('Role', backref=db.backref('users', lazy=True))

@app.route('/users', methods=['POST'])
def create_user():
    data = request.get_json()
    new_user = User(
        id=random.randint(1, 10000),
        first_name=data['first_name'],
        last_name=data['last_name'],
        nick_name=data.get('nick_name', None),
        email=data['email'],
        password=data['password'],
        role_id=data['role_id']
    )
    db.session.add(new_user)
    db.session.commit()
    return jsonify({'message': 'User created successfully'}), 201

@app.route('/users/<int:user_id>', methods=['GET'])
def get_user_by_id(user_id):
    user = User.query.get(user_id)
    if not user:
        return jsonify({'error': 'User not found'}), 404
    
    user_data = {
        'id': user.id,
        'first_name': user.first_name,
        'last_name': user.last_name,
        'email': user.email
    }
    return jsonify({'user': user_data})

@app.route('/users', methods=['GET'])
def get_users():
    users = User.query.all()
    users_data = [{'id': user.id, 'first_name': user.first_name, 'last_name': user.last_name, 'email': user.email} for user in users]
    return jsonify({'users': users_data})

@app.route('/users/<int:user_id>', methods=['PUT'])
def update_user(user_id):
    user = User.query.get(user_id)
    if not user:
        return jsonify({'error': 'User not found'}), 404

    data = request.get_json()
    if 'first_name' in data:
        user.first_name = data['first_name']
    if 'last_name' in data:
        user.last_name = data['last_name']
    if 'email' in data:
        user.email = data['email']
    if 'password' in data:
        user.password = data['password']
    
    db.session.commit()
    return jsonify({'message': 'User updated successfully'})

@app.route('/users/<int:user_id>', methods=['PATCH'])
def partial_update_user(user_id):
    user = User.query.get(user_id)
    if not user:
        return jsonify({'error': 'User not found'}), 404

    data = request.get_json()
    if 'first_name' in data:
        user.first_name = data['first_name']
    if 'last_name' in data:
        user.last_name = data['last_name']
    if 'email' in data:
        user.email = data['email']
    if 'password' in data:
        user.password = data['password']
    
    db.session.commit()
    return jsonify({'message': 'User partially updated successfully'})

@app.route('/users/<int:user_id>', methods=['DELETE'])
def delete_user(user_id):
    user = User.query.get(user_id)
    if not user:
        return jsonify({'error': 'User not found'}), 404
    
    db.session.delete(user)
    db.session.commit()
    return jsonify({'message': 'User deleted successfully'})

if __name__ == '__main__':
    app.run(debug=True)
```
