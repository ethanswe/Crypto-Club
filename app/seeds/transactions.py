from app.models import db, Transaction

# Adds a demo user, you can add other users here if you want


def seed_transactions():

    demo = Transaction(type=-500, coin_id=3, price=50, quantity=10, wallet_id=2)

    db.session.add(demo)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key


def undo_transactions():
    db.session.execute('TRUNCATE transactions;')
    db.session.commit()
