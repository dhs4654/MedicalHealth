from flask import Blueprint

query_dp = Blueprint('query', __name__, url_prefix='/query')
from . import views
