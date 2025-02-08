from flask import Blueprint

#can change this name to something else 
main = Blueprint('main', __name__)

@main.route('/')
def home():
    return "Hello, Flask with routes!"