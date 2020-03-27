import jwt
from server import mysql


def fetch_all_categories():
    cursor = mysql.connection.cursor()
    cursor.execute("""SELECT * FROM categories""")
    results = cursor.fetchall()

    mysql.connection.commit()
    cursor.close()

    return results


def fetch_user(auth_header):
    encoded_token = auth_header.split(" ")[1]
    decoded_data = jwt.decode(encoded_token, "masai02@", algorithm=["HS256"])
    return decoded_data


def category_exists_check_by_name(category_name):
    cursor = mysql.connection.cursor()

    cursor.execute("""SELECT * FROM categories WHERE name = %s""", (category_name,))

    result = cursor.fetchone()

    mysql.connection.commit()
    cursor.close()

    if result:
        return True
    else:
        return False


def add_category(category_name):
    cursor = mysql.connection.cursor()

    cursor.execute("""INSERT INTO categories (name) VALUES (%s)""", (category_name,))

    mysql.connection.commit()
    cursor.close()
