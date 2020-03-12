from flask import Blueprint,json
from server import mysql
from helper import deletebooksmethod
from server import mysql

deletebook = Blueprint('delbook',__name__)

@deletebook.route('/deletebook/<id>')
def deletebooks(id):
    deletebooksmethod(id)
    cursor = mysql.connection.cursor()
    cursor.execute(
        """DELETE FROM books WHERE id = %s""",(id,)
    )
    cursor.connection.commit()
    cursor.close()
    return json.dumps({"message":"deleted"})
    