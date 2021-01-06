from .db import db



class Wallet(db.Model):
  __tablename__ = 'wallets'

  id = db.Column(db.Integer, primary_key=True)
  name = db.Column(db.String(40), nullable=False)
  user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
  balance = db.Column(db.Integer, nullable=False)
  transaction_id = db.Column(db.Integer, db.ForeignKey('transactions.id'))

  user = db.relationship('User', back_populates='wallets')
  transaction = db.relationship('Transaction', back_populates='wallets')

  def to_dict(self):
    return {
        "id": self.id,
        "user_id": self.user_id,
        "balance": self.balance,
    }
