from server import mysql


def get_user_by_id(user_id):
    cur = mysql.connection.cursor()
    cur.execute(
        """
        SELECT * FROM `users` WHERE id=%s
    """,
        (user_id,),
    )
    result = cur.fetchone()
    cur.close()

    return result
