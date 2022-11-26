from flask import Blueprint

scan_dp = Blueprint('scan', __name__, url_prefix='/scan')
from . import views