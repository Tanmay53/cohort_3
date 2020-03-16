import MySQLdb
import MySQLdb.cursors

# db connection


def connection():
    # Trying to connect
    try:
        conn = MySQLdb.connect(host="localhost",
                               user="root",
                               passwd="12345678",
                               db="masai_lib",
                               cursorclass=MySQLdb.cursors.DictCursor)
    # If connection is not successful
    except:
        print("Can't connect to database")
        return 0
    # If Connection Is Successful
    print("Connected")
    return conn, conn.cursor()


if __name__ == '__main__':
    connection()
