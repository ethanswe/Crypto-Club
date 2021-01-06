from .db import db
from datetime import datetime

class Transaction(db.Model):
  __tablename__ = 'transactions'

  id = db.Column(db.Integer, primary_key=True)
  coin_id = db.Column(db.Integer, db.ForeignKey('coins.id'), nullabe=False)
  price = db.Column(db.Integer, nullable=False)
  quantity = db.Column(db.Integer, nullable=False)
  wallet_id = db.Column(db.Integer, db.ForeignKey('wallets.id'), nullable=False)
  date = db.Column(db.DateTime, nulable=False, default=datetime.utcnow)

  coin = db.relationship('Coin', back_populates='transactions')
  wallet = db.relationship('Wallet', back_populates='transactions')

  
  def to_dict(self):
    return {
        "id": self.id,
        "coin_id": self.coin_id,
        "price": self.price,
        "quantity": self.quantity,
        "wallet_id": self.wallet_id,
        "date": self.date,
    }

