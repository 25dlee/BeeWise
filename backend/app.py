from flask import Flask
from .routes import main  # Importing the routes

app = Flask(__name__)

from flask_cors import CORS
CORS(app, origins=["http://localhost:3000"]) #only allow React on localhost:3000

# Register the Blueprint 
app.register_blueprint(main)  

if __name__ == '__main__':
    app.run(debug=True)
