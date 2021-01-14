from .db import db

association_table = db.Table('association', db.Model.metadata,
    db.Column('list_id', db.Integer, db.ForeignKey('lists.id')),
    db.Column('coin_id', db.Integer, db.ForeignKey('coins.id'))
)

class List(db.Model):
  __tablename__ = 'lists'

  id = db.Column(db.Integer, primary_key=True)
#   coin_id = db.Column(db.Integer, db.ForeignKey('coins.id'), nullable=False) # TODO
  user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)

  coins = db.relationship('Coin', secondary=association_table, lazy=True) # DONE
  user = db.relationship('User', back_populates='list', lazy=True)  # DONE

  def to_dict(self):
    return {
        "id": self.id,
        "coin_id": self.coin_id,
        "user_id": self.user_id,
    }



# List
#  Alvin - id: 20, 
#  Ethan - id: 30, 

# List-Coin
# - id: 300, list_id: 20 , coin_id: 100
# - id: 301, list_id: 20 , coin_id: 101
# - id :  302, list_id 30, coin_id: 101

# Coin
# - id: 100, sym: eth,
# - id: 101, sym: btc,

