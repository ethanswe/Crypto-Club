from .db import db


class List(db.Model):
  __tablename__ = 'lists'

  id = db.Column(db.Integer, primary_key=True)
  coin_id = db.Column(db.Integer, db.ForeignKey('coins.id'), nullabe=False)
  user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)

  coin = db.relationship('Coin', back_populates='lists')
  user = db.relationship('User', back_populates='lists')

  def to_dict(self):
    return {
        "id": self.id,
        "coin_id": self.coin_id,
        "user_id": self.user_id,
    }
