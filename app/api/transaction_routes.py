from flask import Blueprint, request
from sqlalchemy.exc import IntegrityError
from app.models import db, Transaction, Coin, Wallet
from flask_login import login_required

transaction_routes = Blueprint('transactions', __name__)


@transaction_routes.route('/create', methods=['POST'])
@login_required
def post_transaction():
    print(request.json)
    data = request.json
    # find the coin whose symbol is data['symbol']
    coin = Coin.query.filter_by(symbol=data['symbol'].upper()).one()
    # coin_id = coin.id
    transaction = Transaction(
        type=data['type'],
        price=data['price'],
        quantity=data['quantity'],
        coin=coin,
        wallet_id=data['wallet_id'])
    wallet = Wallet.query.get(data['wallet_id'])
    wallet.balance += data['type']
    db.session.add(transaction)
    db.session.add(wallet)
    db.session.commit()
    return transaction.to_dict()


# @transaction_routes.route('/get-transactions', methods=['GET'])
# @login_required
# def get_transactions(wallet_id):
#     transactions = Transaction.query.get(wallet_id)

# define GET route to get all transactions associated with a wallet
# Pass in the current wallet_id to pull all transactions
# list comprehension


