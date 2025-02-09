from flask import Flask
from .routes import main  # Importing the routes
from flask_cors import CORS

app = Flask(__name__)

# Allow frontend on localhost & Vercel deployment
CORS(app, origins=["http://localhost:3000", "https://beewise.vercel.app/"])

# Register the Blueprint 
app.register_blueprint(main)

# This is required for Vercel's Python deployment
def handler(event, context):
    return app(event, context)
