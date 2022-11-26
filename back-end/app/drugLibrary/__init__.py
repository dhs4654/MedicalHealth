from flask import Blueprint

drugs_dp = Blueprint('drugs_dp', __name__, url_prefix='/drugLibrary')
from . import views