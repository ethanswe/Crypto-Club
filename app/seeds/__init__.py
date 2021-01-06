from flask.cli import AppGroup
from .users import seed_users, undo_users
from .coins import seed_coins, undo_coins
from .lists import seed_lists, undo_lists
from .transactions import seed_transactions, undo_transactions
from .wallets import seed_wallets, undo_wallets
# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')

# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    seed_coins()
    seed_lists()
    seed_transactions()
    seed_wallets()
    # Add other seed functions here

# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    undo_coins()
    undo_lists()
    undo_transactions()
    undo_wallets()
    # Add other undo functions here
