from flask import Blueprint, request
from sqlalchemy.exc import IntegrityError
from app.models import db, List, Coin
from flask_login import current_user, login_required


list_routes = Blueprint('lists', __name__)

# @list_routes.route('/create', methods=['POST'])
# @login_required
# def post_list():
#     data = request.json
#     coin = Coin.query.filter_by(symbol=data['symbol'].upper()).one()
#     coin_id = coin
#     list = List(
#         coin_id=coin_id,
#         user_id=data['user_id'])
#     # db.session.add(list)
#     # db.session.commit()
#     print(list)
#     return list.to_dict()

# @list_routes.route('/add-coin', methods=['PUT'])
# @login_required
# def post_list():
#     data = request.json
#     coin = Coin.query.filter_by(symbol=data['symbol'].upper()).one()

#     # db.session.add(list)
#     # db.session.commit()
#     print(list)
#     return list.to_dict()
