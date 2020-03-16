from flask import Blueprint

user = Blueprint("user", __name__)

# function to read user csv


def read_user():
    try:
        items = list()
        with open("/home/akamit21/repos/cohort_3/submissions/sm_102_amit/week_16/day_4/assignment/server/data/users.csv", "r") as csvfile:
            reader = csv.DictReader(csvfile)
            for row in reader:
                items.append(dict(row))
        return items
    except Exception as e:
        return (e)

# user list
@user.route("/list")
def list_users():
    users = read_user()
    addresses = read_address()
    return json.dumps({"status": 200, "users": users, "addresses": addresses})
