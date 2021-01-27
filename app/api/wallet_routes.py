from flask import Blueprint, request
from sqlalchemy.exc import IntegrityError
from app.models import db, Wallet
from flask_login import current_user, login_required

wallet_routes = Blueprint('wallets', __name__)


@wallet_routes.route('/create', methods=['POST'])
@login_required
def post_wallet():
    data = request.json
    wallet = Wallet(
        user_id=data['user_id'],
        name=data['name'],
        balance=data['balance'],
        startingBalance=data['balance'])
    db.session.add(wallet)
    db.session.commit()
    return wallet.to_dict()

@wallet_routes.route('/<int:wallet_id>/update', methods=['PUT'])
@login_required
def update_wallet():
    data = request.json
    wallet = Wallet.query.get(wallet_id)
    wallet.name = data['name']
    wallet.balance = data['balance']
    db.session.add(wallet)
    db.session.commit()
    return wallet.to_dict()

@wallet_routes.route('/', methods=['GET'])
@wallet_routes.route('/<int:wallet_id>', methods=['GET'])
def get_wallet(wallet_id=None):
    if (wallet_id is None):
        wallet = Wallet.query.filter_by(user_id = current_user.id).first()
    else:
        wallet = Wallet.query.get(wallet_id)
    if (wallet is None):
        return {"transactions": [], "balance": 0}
    else:
        return wallet.to_dict()
