from flask import Flask
# Import Blueprints
from auth import auth

app = Flask(__name__)

app.register_blueprint(auth,url_prefix="/auth")

app.run(debug=1)