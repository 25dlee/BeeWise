from flask import Flask
from .routes import main  # Importing the routes

app = Flask(__name__)

# Register the Blueprint 
app.register_blueprint(main)  

if __name__ == '__main__':
    app.run(debug=True)
