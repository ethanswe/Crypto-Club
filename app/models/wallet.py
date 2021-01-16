from .db import db



class Wallet(db.Model):
  __tablename__ = 'wallets'

  id = db.Column(db.Integer, primary_key=True)
  name = db.Column(db.String(40), nullable=False)
  balance = db.Column(db.Float, nullable=False)
  startingBalance = db.Column(db.Float, nullable=False)
  user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)

  transactions = db.relationship('Transaction', lazy=True)  # DONE

  def to_dict(self):
    return {
        "id": self.id,
        "user_id": self.user_id,
        "balance": self.balance,
        "startingBalance": self.startingBalance,
        "name": self.name,
        "transactions": [ tx.to_dict() for tx in self.transactions ],
    }

  def __repr__(self):
        return '<Wallet %r>' % self.name
