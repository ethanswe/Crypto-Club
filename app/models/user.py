from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin

class User(db.Model, UserMixin):
  __tablename__ = 'users'

  id = db.Column(db.Integer, primary_key = True)
  firstName = db.Column(db.String(40), nullable = False, unique = True)
  lastName = db.Column(db.String(40), nullable = False, unique = True)
  email = db.Column(db.String(255), nullable=False, unique=True)
  wallet_id = db.Column(db.Integer, db.ForeignKey('wallets.id'))
  list_id = db.Column(db.Integer, db.ForeignKey('lists.id'))
  hashed_password = db.Column(db.String(255), nullable = False)

  wallet = db.relationship('Wallet', back_populates='users')
  list = db.relationship('List', back_populates='users')

  @property
  def password(self):
    return self.hashed_password


  @password.setter
  def password(self, password):
    self.hashed_password = generate_password_hash(password)


  def check_password(self, password):
    return check_password_hash(self.password, password)


  def to_dict(self):
    return {
      "id": self.id,
      "firstName": self.firstName,
      "lastName": self.lastName,
      "email": self.email
    }
