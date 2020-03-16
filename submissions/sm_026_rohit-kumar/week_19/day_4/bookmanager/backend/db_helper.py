import pymysql.cursors
import pymysql


def connect():
    connection  = pymysql.connect(host='localhost',
                    user='scott',
                    password='Admin123*',
                    db='books',
                    charset='utf8mb4',
                    cursorclass=pymysql.cursors.DictCursor)

    return connection
    
def insert(query, arguments):
    try:
        conn = connect()
        with conn.cursor() as cursor:
            cursor.execute(query, arguments)
        
        conn.commit()
        return {'result': 'success'}
    except Exception as ex:
        print('Error: ', ex)
        raise
    finally:
        conn.close()

def insert_then_select_id(query, arguments):
    try:
        conn = connect()
        with conn.cursor() as cursor:
            cursor.execute(query, arguments)        
            conn.commit()
            cursor.execute('SELECT LAST_INSERT_ID() as `ID`')
            return {'result': cursor.fetchone()}
    except Exception as ex:
        print('Error: ', ex)
        raise
    finally:
        conn.close()


def select_one(query, arguments):    
    try:
        conn = connect()
        with conn.cursor() as cursor:
            cursor.execute(query, arguments)
            return {'result': 'success', 'data': cursor.fetchone()}
    except Exception as ex:
        print('Error: ', ex)
        raise
    finally:
        conn.close()


def select_all(query, arguments=None): 
    try:
        conn = connect()
        with conn.cursor() as cursor:
            if arguments:
                cursor.execute(query, arguments)
            else:
                cursor.execute(query)
            return {'result': 'success', 'data': cursor.fetchall()}
    except Exception as ex:
        print('Error: ', ex)
        raise
    finally:
        conn.close()



def delete_helper(query_arr):
    try:
        conn = connect()
        with conn.cursor() as cursor:
            for query in query_arr:
                cursor.execute(query[0], query[1])
            conn.commit()
            return {'result': 'success'}
    except Exception as ex:
        print('Error: ', ex)
        raise
    finally:
        conn.close()

def edit_helper(query, arguments):
    try:
        conn = connect()
        with conn.cursor() as cursor:
            cursor.execute(query, arguments)
            conn.commit()
            return {'result': 'success'}            
    except Exception as ex:
        print('Error: ', ex)
        raise
    finally:
        conn.close()
