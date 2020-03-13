from flask import Blueprint
from user.user_helpers import get_user_by_id

user = Blueprint("user", __name__)


@user.route("/<int:user_id>")
def user_info(user_id):
    user = get_user_by_id(user_id)

    if user:
        return {
            "error": False,
            "message": "User Found!",
            "payload": {
                "user": {"id": user["id"], "name": user["name"], "email": user["email"]}
            },
        }
    else:
        return {"error": True, "message": "User Not Found!"}

