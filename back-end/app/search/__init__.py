from flask import Blueprint

search_dp = Blueprint('search', __name__, url_prefix='/search')
from . import views


