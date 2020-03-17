from flask import Blueprint,request,jsonify
import server

tweet = Blueprint("tweet",__name__)


@tweet.route("/addTweet/<int:id>",methods = ['POST'])
def add_tweet(id):
    title = request.json['title']
    body = request.json['body']
    try:
        conn = server.mysql.connection.cursor()
        conn.execute("""
            INSERT INTO tweets (title,body,author) values (%s,%s,%s)
        """,(title,body,id))
        server.mysql.connection.commit()
        return jsonify({"error":False,"msg":"Tweets Added Successfully"})
    except Exception as e:
        return jsonify({"error":True,"msg":str(e)})
    finally:
        conn.close()

@tweet.route("/getusertweets/<int:id>")
def get_user_tweets(id):
    try:
        conn = server.mysql.connection.cursor()
        conn.execute("""
            SELECT * from tweets where author = %s ORDER BY created_at DESC
        """,(id,))
        row = conn.fetchall()
        return jsonify({"msg":"tweets loaded","count" : len(row) , "data":row })
    except Exception as e:
        return jsonify({"msg":str(e)})
    finally:
        conn.close()

@tweet.route("/getuserfeeds/<int:id>")
def generate_feed(id):
    print(id)
    try:
        conn = server.mysql.connection.cursor()
        conn.execute("""
        select * from tweets where author in (select follower from followers where following = %s) ORDER BY created_at DESC limit 20
        """,(id,))
        rows = conn.fetchall()
        return jsonify({"msg":"feed generated","count":len(rows),"data":rows})
    except Exception as e:
        return jsonify({"msg":str(e)})
    finally:
        conn.close()
