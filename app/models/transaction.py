from .db import db
from datetime import datetime

class Transaction(db.Model):
  __tablename__ = 'transactions'

  id = db.Column(db.Integer, primary_key=True)
  type = db.Column(db.Integer, nullable=False)
  price = db.Column(db.Integer, nullable=False)
  quantity = db.Column(db.Integer, nullable=False)
  date = db.Column(db.DateTime, default=datetime.utcnow)
  coin_id = db.Column(db.Integer, db.ForeignKey('coins.id'), nullable=False)
  wallet_id = db.Column(db.Integer, db.ForeignKey('wallets.id'), nullable=False)

  coin = db.relationship(
      "Coin", back_populates="transactions", lazy=True)  # DONE

  def to_dict(self):
    return {
        "id": self.id,
        "type": self.type,
        "coin_id": self.coin_id,
        "price": self.price,
        "quantity": self.quantity,
        "wallet_id": self.wallet_id,
        "date": self.date,
    }

