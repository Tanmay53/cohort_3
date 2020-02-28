from flask import Blueprint

post = Blueprint("post",__name__)

@post.route("/postdata")
def posting():
    return "post"