from werkzeug.security import generate_password_hash
from app.models import db, Coin

# Adds a demo user, you can add other users here if you want


def seed_coins():

    bitcoin = Coin(name='Bitcoin', symbol='XBT')
    ethereum = Coin(name='Ethereum', symbol='ETH')
    bitcoincash = Coin(name='BitcoinCash', symbol='BCH')
    chainlink = Coin(name='Chainlink', symbol='LINK')
    litecoin = Coin(name='Litecoin', symbol='LTC')
    monero = Coin(name='Monero', symbol='XMR')
    graph = Coin(name='The Graph', symbol='GRT')
    waves = Coin(name='Waves', symbol='WAVES')
    
    db.session.add(bitcoin)
    db.session.add(ethereum)
    db.session.add(bitcoincash)
    db.session.add(chainlink)
    db.session.add(litecoin)
    db.session.add(monero)
    db.session.add(graph)
    db.session.add(waves)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key


def undo_coins():
    db.session.execute('TRUNCATE coins;')
    db.session.commit()
