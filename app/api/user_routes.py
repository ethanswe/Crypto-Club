from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import User, Coin, db

user_routes = Blueprint('users', __name__)


@user_routes.route('/')
@login_required
def users():
    users = User.query.all()
    return {"users": [user.to_dict() for user in users]}


@user_routes.route('/<int:id>')
@login_required
def user(id):
    user = User.query.get(id)
    return user.to_dict()


@user_routes.route('/<int:user_id>/wallets', methods=['GET'])
@login_required
def get_wallets(user_id):
    # get from the db the user with the is user id
    user = User.query.get(user_id)
    return { "wallets": [ w.to_dict() for w in user.wallets ] }

@user_routes.route('/<int:user_id>/list/coins', methods=['POST'])
@login_required
def create_list_coin(user_id):
    data = request.json
    coin = Coin.query.filter_by(symbol=data['symbol'].upper()).one()
    user = User.query.get(user_id)
    user.list.coins.append(coin)
    db.session.add(user)
    db.session.commit()
    return "Added!"
