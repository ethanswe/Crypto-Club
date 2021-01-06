from app.models import db, Wallet

def seed_wallets():
    
    demo = Wallet(name="Ethan's Wallet 1", user_id=2, balance=25000)
    second = Wallet(name="Ethan's Wallet No 2", user_id=2, balance=24500)
    

    db.session.add(demo, second)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_wallets():
    db.session.execute('TRUNCATE wallets;')
    db.session.commit()
