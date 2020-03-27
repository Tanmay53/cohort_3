import jwt

from server import mysql


def fetch_user(auth_header):
    encoded_token = auth_header.split(" ")[1]
    decoded_data = jwt.decode(encoded_token, "masai02@", algorithm=["HS256"])
    return decoded_data


def product_exists_check_by_name(product_name):
    cursor = mysql.connection.cursor()

    cursor.execute("""SELECT * FROM products WHERE name = %s""", (product_name,))

    result = cursor.fetchone()

    mysql.connection.commit()
    cursor.close()

    if result:
        return True
    else:
        return False


def add_product(product_name, product_price, category_id):
    cursor = mysql.connection.cursor()

    cursor.execute("""INSERT INTO products (name, price, category) VALUES (%s, %s, %s)""",
                   (product_name, product_price, category_id))

    mysql.connection.commit()
    cursor.close()


def product_exists_check_by_id(product_id):
    cursor = mysql.connection.cursor()
    cursor.execute("""SELECT * FROM products WHERE id = %s""", (product_id,), )
    result = cursor.fetchone()
    cursor.close()

    if result:
        return True
    else:
        return False


def delete_product(product_id):
    cursor = mysql.connection.cursor()
    cursor.execute("""DELETE FROM products WHERE id = %s""", (product_id,))
    mysql.connection.commit()
    cursor.close()


def update_product(product_id, product_name, product_price, category_id):
    cursor = mysql.connection.cursor()
    cursor.execute("""UPDATE products SET name=%s, price=%s, category=%s WHERE id=%s""",
                   (product_name, product_price, category_id, product_id))

    mysql.connection.commit()
    cursor.close()


def fetch_all_products(category_id):
    cursor = mysql.connection.cursor()
    if category_id == 0:
        cursor.execute("""SELECT * FROM products""")
    else:
        cursor.execute("""SELECT * FROM products WHERE category = %s""", (category_id,))
    results = cursor.fetchall()
    cursor.close()

    return results


def fetch_all_products_by_limit(offset, limit, category_id):
    cursor = mysql.connection.cursor()

    if category_id == 0:
        cursor.execute(
            """SELECT products.id as product_id, products.name as product_name, price, categories.id as category_id, categories.name as category_name FROM products JOIN categories ON products.category = categories.id ORDER BY price LIMIT %s,%s""",
            (offset, limit))
    else:
        cursor.execute(
            """SELECT products.id as product_id, products.name as product_name, price, categories.id as category_id, categories.name as category_name FROM products JOIN categories ON products.category = categories.id WHERE categories.id = %s ORDER BY price LIMIT %s,%s""",
            (category_id, offset, limit))

    results = cursor.fetchall()

    mysql.connection.commit()
    cursor.close()

    return results
