from flask import Blueprint

comment = Blueprint("comment",__name__)

@comment.route("/commenttext")
def commenting():
    return "comment"