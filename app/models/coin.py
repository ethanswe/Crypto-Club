from .db import db

class Coin(db.Model):
  __tablename__ = 'coins'

  id = db.Column(db.Integer, primary_key=True)
  name = db.Column(db.String(40), nullable=False, unique=True)
  symbol = db.Column(db.String(20), nullable=False, unique=True)
  list_id = db.Column(db.Integer, db.ForeignKey('lists.id'))
  transaction_id = db.Column(db.Integer, db.ForeignKey('transactions.id'))

  list = db.relationship('List', back_populates='coins')
  transaction = db.relationship('Transaction', back_populates='coins')

  def to_dict(self):
    return {
        "id": self.id,
        "name": self.name,
        "symbol": self.symbol,
    }