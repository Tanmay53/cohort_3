from server import mysql


def delete_category(id):
    category = get_category_by_id(id)

    if category:
        cur = mysql.connection.cursor()
        cur.execute(
            """
            DELETE FROM `categories` WHERE id=%s
        """,
            (id,),
        )
        mysql.connection.commit()
        cur.close()

        return {"error": False, "message": "Product Deleted!"}
    else:
        return {"error": True, "message": "No Category Found!"}


def update_category(id, name):
    category = get_category_by_id(id)

    if not category:
        return {"error": True, "message": "No Category Found!"}
    else:
        cur = mysql.connection.cursor()
        cur.execute(
            """
            UPDATE `categories` SET name=%s WHERE id=%s
        """,
            (name, id),
        )
        mysql.connection.commit()
        cur.close()

        return {"error": False, "message": "Category Updated!"}


def get_all_categories():
    cur = mysql.connection.cursor()
    cur.execute(
        """
        SELECT * FROM `categories`
    """
    )
    result = cur.fetchall()
    cur.close()

    return result


def add_category(name):
    category = get_category_by_name(name)

    if category:
        return {"error": True, "message": "Category Already Added!"}
    else:
        cur = mysql.connection.cursor()
        cur.execute(
            """
            INSERT INTO `categories` (name) VALUES (%s)
        """,
            (name,),
        )
        mysql.connection.commit()
        cur.close()

        return {"error": False, "message": "Category Added!"}


def get_category_by_name(name):
    cur = mysql.connection.cursor()
    cur.execute(
        """
        SELECT * FROM `categories` WHERE name=%s
    """,
        (name,),
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
