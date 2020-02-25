from flask import Flask
from blueprint_auth import auth
from flask_cors import CORS

app = Flask(__name__)
app.register_blueprint(auth, url_prefix="/auth")
CORS(app)


@app.route("/")
def home():
    return "hello"


@app.route("/demo")
def demo():
    return "Demo "


if __name__ == "__main__":
    app.run(debug=True)
