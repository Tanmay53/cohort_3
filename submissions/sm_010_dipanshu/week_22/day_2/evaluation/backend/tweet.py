from flask import Blueprint, request
from server import mysql
import jwt
import datetime

tweet = Blueprint("tweet", __name__)


def fetch_user_id(auth_header):
    encoded_token = auth_header.split(" ")[1]
    decoded_data = jwt.decode(encoded_token, "masai02@", algorithm=["HS256"])
    return decoded_data["id"]


@tweet.route("/fetch/user-tweets", methods=["GET"])
def fetch_tweets():
    tweets = []
    current_user_id = fetch_user_id(request.headers.get("Authorization"))

    cursor = mysql.connection.cursor()

    cursor.execute("""SELECT * FROM tweets WHERE user_id = %s""", (current_user_id,))
    results = cursor.fetchall()

    for tweet in results:
        cursor.execute("""SELECT image_url FROM users WHERE id = %s""", (current_user_id,))
        user_results = cursor.fetchall()
        for user_details in user_results:
            tweet["image_url"] = user_details["image_url"]
        tweets.append(tweet)

    mysql.connection.commit()
    cursor.close()

    return {"status": 200, "message": "Tweets fetch successful", "tweets": tweets}


@tweet.route("/fetch/all-tweets", methods=["GET"])
def fetch_all_tweets():
    current_user_id = fetch_user_id(request.headers.get("Authorization"))
    tweets = []
    following = []

    cursor1 = mysql.connection.cursor()
    cursor1.execute("""SELECT follows_user_id FROM following WHERE user_id = %s""", (current_user_id,))
    results = cursor1.fetchall()

    for users in results:
        # following.append(users["follows_user_id"])
        cursor2 = mysql.connection.cursor()

        cursor2.execute("""SELECT * FROM tweets WHERE user_id = %s""", (users["follows_user_id"],))
        result = cursor2.fetchall()

        for tweet in result:
            cursor3 = mysql.connection.cursor()

            cursor3.execute("""SELECT name, image_url FROM users WHERE id = %s""", (tweet["user_id"],))
            user_results = cursor3.fetchall()

            for user_details in user_results:
                tweet["name"] = user_details["name"]
                tweet["image_url"] = user_details["image_url"]
            tweets.append(tweet)

            cursor3.close()

        cursor2.close()

    mysql.connection.commit()
    cursor1.close()

    return {"status": 200, "message": "All tweets fetch successful", "tweets": tweets}


@tweet.route("/create", methods=["POST"])
def create_tweet():
    content = request.json["tweetContent"]

    current_user_id = fetch_user_id(request.headers.get("Authorization"))

    cursor = mysql.connection.cursor()

    cursor.execute(
        """INSERT INTO tweets (user_id, content, time_created) VALUES (%s, %s, %s)""",
        (current_user_id, content, datetime.datetime.now()))

    mysql.connection.commit()
    cursor.close()

    return {"status": 200, "message": "Tweet creation successful"}
