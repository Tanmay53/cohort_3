from server import mysql


def delete_book_by_id(book_id):
    book_exists = get_book_by_id(book_id)

    if book_exists:
        cur = mysql.connection.cursor()
        cur.execute(
            """
            DELETE FROM `books_authors` WHERE book_id=%s
        """,
            (book_id,),
        )
        mysql.connection.commit()

        cur.execute(
            """
            DELETE FROM `books_categories` WHERE book_id=%s
        """,
            (book_id,),
        )
        mysql.connection.commit()

        cur.execute(
            """
            DELETE FROM `books` WHERE id=%s
        """,
            (book_id,),
        )
        mysql.connection.commit()
        cur.close()

        return {"error": False, "message": "Book Deleted!"}

    return {"error": True, "message": "Cannot Delete Book!"}


def change_book_name(book_id, book_name):
    book_exists = get_book_by_id(book_id)

    if book_exists:
        cur = mysql.connection.cursor()
        cur.execute(
            """
            UPDATE `books` SET name=%s where id=%s

        """,
            (book_name, book_id),
        )
        mysql.connection.commit()
        cur.close()

        return {"error": False, "message": "Book Updated!"}

    return {"error": True, "message": "Cannot Update Book!"}


def get_all_books():
    cur = mysql.connection.cursor()
    cur.execute(
        """
        SELECT * FROM `books`
    """
    )

    result = cur.fetchall()
    cur.close()

    return result


def add_book(name, author_id, category_id, publisher_id):
    author_exists = get_author_by_id(author_id)
    publisher_exists = get_publisher_by_id(publisher_id)
    category_exists = get_category_by_id(category_id)

    if author_exists and publisher_exists and category_exists:
        cur = mysql.connection.cursor()
        cur.execute(
            """
            INSERT INTO `books` (name, publisher_id) VALUES (%s, %s)
        """,
            (name, publisher_id),
        )
        mysql.connection.commit()

        cur.execute(
            """
            SELECT * FROM `books` ORDER BY id DESC LIMIT 1
        """
        )
        curr_book_id = cur.fetchone()["id"]

        cur.execute(
            """
            INSERT INTO `books_authors` (book_id, author_id) VALUES (%s, %s)
        """,
            (curr_book_id, author_id),
        )
        mysql.connection.commit()

        cur.execute(
            """
            INSERT INTO `books_categories` (book_id, category_id) VALUES (%s, %s)
        """,
            (curr_book_id, category_id),
        )
        mysql.connection.commit()
        cur.close()

        return {"error": False, "message": "Book Added!"}

    return {"error": True, "message": "Book Addition Failed!"}


def get_publisher_by_id(publisher_id):
    cur = mysql.connection.cursor()
    cur.execute(
        """
        SELECT * FROM `publishers` WHERE id=%s
    """,
        (publisher_id,),
    )
    result = cur.fetchone()
    cur.close()

    return result


def get_author_by_id(author_id):
    cur = mysql.connection.cursor()
    cur.execute(
        """
        SELECT * FROM `authors` WHERE id=%s
    """,
        (author_id,),
    )
    result = cur.fetchone()
    cur.close()

    return result


def get_category_by_id(category_id):
    cur = mysql.connection.cursor()
    cur.execute(
        """
        SELECT * FROM `categories` WHERE id=%s
    """,
        (category_id,),
    )
    result = cur.fetchone()
    cur.close()

    return result


def get_book_by_id(book_id):
    cur = mysql.connection.cursor()
    cur.execute(
        """
        SELECT * FROM `books` WHERE id=%s
    """,
        (book_id,),
    )
    result = cur.fetchone()
    cur.close()

    return result
