from flask import Blueprint, request
from sqlalchemy.exc import IntegrityError
from app.models import db, Wallet

wallet_routes = Blueprint('wallet', __name__)



# @wallet_routes.route('')