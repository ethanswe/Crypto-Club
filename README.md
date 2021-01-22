## Crypto Club 

**Description**
* Crypto Club is a "paper trading" cryptocurrency exchange. It allows users to create as many wallets as they'd like as well as selecting the paper balance they'd like in each wallet. The portfolio page and coin page reflect 8 cryptocurrencies in real time pricing thanks to the Kraken REST API. 

**Live Demonstration**
* https://crypto-club-aa.herokuapp.com/

**MVP**
* User authentication 
* Allow users to create a wallet
* Allow users to view their portfolio page with Profit/Loss, Current Asset's Held, and Available Cash Balance
* Display all 8 cryptocurrencies with market information from the Kraken API
* Allow users to buy/sell coins
* Allow users to add cryptocurrencies to their watch list on the portfolio page


**Bonus Goals**
* Create a swap functionality that allows users to exchange their current coin for a different coin without having to sell their current asset and buy a new one.
* Edit/Delete functionality on wallets 
* Edit/Delete functionality on watch list 

## Technologies
 - JavaScript
 - Python 3
 - Flask
 - FlaskForms
 - SQLAlchemy
 - Alembic
 - React
 - HTML/CSS
 - Kraken API

## Feature List
 ### User CRUD
  - Signup/login/logout

 ### Wallet CRUD
  - Users can create a wallet with a custom balance in USD. 

 ### Transaction CRUD
  - Users can create a buy/sell transaction.

 ### Watch List CRUD
  - Users can add individual cryptocurrencies to their watch list

 ### Portfolio Page
  - Every wallet has a portfolio page.
  - Portfolio page displays Profit/Loss by making a request to the Python backend to get the coin names and quantity of each coin held by a wallet. It will then calculate the current market price of all of the coins held by the wallet against the starting balance of the wallet and the available cash on hand. 
  - Portfolio page will also display the current assets held and a history of all transactions a wallet has made. 

