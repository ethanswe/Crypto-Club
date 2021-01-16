from flask import Blueprint, request
from sqlalchemy.exc import IntegrityError
from app.models import db, Coin
import urllib.request
import json

coin_routes = Blueprint('coins', __name__)

BASE_URL = "https://api.kraken.com/0/public/Ticker?pair="

crypto_symbol = {
    'BCH': 'BCHUSD',
    'GRT': 'GRTUSD',
    'LINK': 'LINKUSD',
    'WAVES': 'WAVESUSD',
    'ETH': 'XETHZUSD',
    'LTC': 'XLTCZUSD',
    'BTC': 'XXBTZUSD',
    'XMR': 'XXMRZUSD'
}

def derive_coins(data, symbols):
    coins = []
    # for coin_key in data['result']:
    for symbol in symbols:
        coin_key = crypto_symbol[symbol]
        price = float(data['result'][coin_key]['c'][0])
        ask = float(data['result'][coin_key]['a'][0])
        bid = float(data['result'][coin_key]['b'][0])
        high = float(data['result'][coin_key]['h'][0])
        low = float(data['result'][coin_key]['l'][0])
        volume = float(data['result'][coin_key]['v'][0])
        open = float(data['result'][coin_key]['o'])
        coin_data = {"price": price, "ask": ask, "bid": bid, "high": high, "low": low, "volume": volume, "open": open}
        coins.append(coin_data)
    return coins


@coin_routes.route('/<symbols_str>', methods=['GET'])
def get_coins(symbols_str):
    symbols = symbols_str.split(',')
    pairs = [(symbol + "usd").upper() for symbol in symbols]
    url = BASE_URL + ",".join(pairs)
    contents = urllib.request.urlopen(url)
    data = json.load(contents)
    coins = derive_coins(data, symbols)
    return {'coins': coins}
