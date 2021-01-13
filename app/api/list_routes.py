from flask import Blueprint, request
from sqlalchemy.exc import IntegrityError
from app.models import db, List
from flask_login import current_user, login_required


list_routes = Blueprint('lists', __name__)

@list_routes.route('/create', methods=['POST'])
@login_required
def post_list():
    data = request.json
    list = List(
        coin_id=data['coin_id'],
        user_id=data['user'])
    db.session.add(list)
    db.session.commit()
    return list.to_dict()