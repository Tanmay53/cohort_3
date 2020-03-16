from flask import Blueprint, request
import os
import csv
import jwt

details = Blueprint("details", __name__)


def fetch_user_id(auth_header):
    encoded_token = auth_header.split(" ")[1]
    decoded_data = jwt.decode(encoded_token, 'masai-jwt', algorithms=["HS256"])
    return decoded_data["id"]


def fetch_user_details(id):
    with open("data/users.csv") as csvfile:
        reader = csv.DictReader(csvfile)
        for row in reader:
            if row["id"] == id:
                return {"id": row["id"], "name": row["name"], "email": row["email"], "image": row["image"],
                        "image_url": row["image_url"]}


def upload_current_user_image(user_id, image, image_url):
    current_file = []
    new_file = []
    with open("data/users.csv") as csvfile:
        reader = csv.DictReader(csvfile)
        for row in reader:
            current_file.append(row)

    for user in current_file:
        if user["id"] == user_id:
            if image is not "":
                user["image"] = image
            if image_url is not "":
                user["image_url"] = image_url
            new_file.append(user)
        else:
            new_file.append(user)

    with open("data/users.csv", "w") as csvfile:
        fieldnames = ["id", "name", "email", "salt", "hash_password", "image", "image_url"]
        writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
        writer.writeheader()

        for user in new_file:
            writer.writerow(user)


def image_exists_check(location):
    if os.path.exists(location):
        return True
    else:
        return False


@details.route("", methods=["POST"])
def user_details():
    current_user_id = fetch_user_id(request.headers.get("Authorization"))
    current_user_details = fetch_user_details(current_user_id)
    return {"status": 200, "message": "Success", "details": current_user_details}


@details.route("/upload", methods=["POST"])
def upload_image():
    image = request.json["image"]
    if image is not None:
        current_user_id = fetch_user_id(request.headers.get("Authorization"))
        upload_current_user_image(current_user_id, image, "")
        current_user_details = fetch_user_details(current_user_id)
        return {"status": 200, "message": "Success", "details": current_user_details}
    else:
        return {"status": 400, "message": "Failure. No image provided"}


@details.route('/upload-form', methods=['POST'])
def upload_file():
    if request.method == 'POST':
        f = request.files['image']
        print("=============================", f)
        location = "public/static/" + f.filename
        if not image_exists_check(location):
            f.save(location)
        current_user_id = fetch_user_id(request.headers.get("Authorization"))
        upload_current_user_image(current_user_id, "", "/static/" + f.filename)
        current_user_details = fetch_user_details(current_user_id)
        return {"status": 200, "message": "Success", "details": current_user_details}
    else:
        return {"status": 400, "message": "Failure. No image provided"}
