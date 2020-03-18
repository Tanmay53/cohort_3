from flask import Flask
from flask import Request, Response, jsonify
from flask_cors import CORS

from blueprint_auth import auth
from blueprint_category import category
from blueprint_product import product

app = Flask(__name__)
app.register_blueprint(auth, url_prefix="/auth")
app.register_blueprint(category, url_prefix="/category")
app.register_blueprint(product, url_prefix="/product")

CORS(app)
# base route
@app.route("/")
def home():
    return ("Server is running ... ")


# run server
if __name__ == "__main__":
    app.run(debug=1)
