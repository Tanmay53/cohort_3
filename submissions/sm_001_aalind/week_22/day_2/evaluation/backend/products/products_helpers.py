from server import mysql


def get_products_by_pg_limit(offset, limit):
    cur = mysql.connection.cursor()
    cur.execute(
        """
        SELECT * FROM `products` LIMIT %s, %s
    """,
        (offset, limit),
    )
    result = cur.fetchall()
    cur.close()

    return result


def delete_product(id):
    product = get_product_by_id(id)

    if product:
        cur = mysql.connection.cursor()
        cur.execute(
            """
            DELETE FROM `products` WHERE id=%s
        """,
            (id,),
        )
        mysql.connection.commit()
        cur.close()

        return {"error": False, "message": "Product Deleted!"}
    else:
        return {"error": True, "message": "No Product Found!"}


def update_product(id, name, price, category_id):
    product = get_product_by_id(id)
    category = get_category_by_id(category_id)

    if not product:
        return {"error": True, "message": "No Product Found!"}
    elif not category:
        return {"error": True, "message": "No Category Found!"}
    else:
        cur = mysql.connection.cursor()
        cur.execute(
            """
            UPDATE `products` SET name=%s, price=%s, category_id=%s WHERE id=%s
        """,
            (name, price, category_id, id),
        )
        mysql.connection.commit()
        cur.close()

        return {"error": False, "message": "Product Updated!"}


def get_all_products():
    cur = mysql.connection.cursor()
    cur.execute(
        """
        SELECT * FROM `products`
    """
    )
    result = cur.fetchall()
    cur.close()

    return result


def add_product(name, price, category_id):
    product = get_product_by_name(name)
    category = get_category_by_id(category_id)

    if product:
        return {"error": True, "message": "Product Already Added!"}
    elif not category:
        return {"error": True, "message": "Product Category Not Found!"}
    else:
        cur = mysql.connection.cursor()
        cur.execute(
            """
            INSERT INTO `products` (name, price, category_id) VALUES (%s, %s, %s)
        """,
            (name, price, category_id),
        )
        mysql.connection.commit()
        cur.close()

        return {"error": False, "message": "Product Added!"}


def get_product_by_name(name):
    cur = mysql.connection.cursor()
    cur.execute(
        """
        SELECT * FROM `products` WHERE name=%s
    """,
        (name,),
    )
    result = cur.fetchone()
    cur.close()

    return result


def get_product_by_id(id):
    cur = mysql.connection.cursor()
    cur.execute(
        """
        SELECT * FROM `products` WHERE id=%s
    """,
        (id,),
    )
    result = cur.fetchone()
    cur.close()

    return result


def get_category_by_id(id):
    cur = mysql.connection.cursor()
    cur.execute(
        """
        SELECT * FROM `categories` WHERE id=%s
    """,
        (id,),
    )
    result = cur.fetchone()
    cur.close()

    return result

