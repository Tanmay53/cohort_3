import pymysql.cursors
import pymysql


def connect():
    connection  = pymysql.connect(host='localhost',
                    user='scott',
                    password='Admin123*',
                    db='projects',
                    charset='utf8mb4',
                    cursorclass=pymysql.cursors.DictCursor)

    return connection
    
def insert(query, arguments):
    result = None      
    try:
        conn = connect()
        with conn.cursor() as cursor:
            cursor.execute(query, arguments)
        
        conn.commit()
        result = {'result': 'success'}
    except Exception:
        result = {'result': 'failure'}
    finally:
        conn.close()
        return result

def insert_then_select(query_arr):
    result = None      
    try:
        conn = connect()
        with conn.cursor() as cursor:
            cursor.execute(query_arr[0][0], query_arr[0][1])
            conn.commit()
            # now select the last result
            cursor.execute(query_arr[1][0], query_arr[1][1])
            result = {'result': 'success', 'data': cursor.fetchone()}
    except Exception:
        result = {'result': 'failure'}
    finally:
        conn.close()
        return result


def select_one(query, arguments):
    result = None      
    try:
        conn = connect()
        with conn.cursor() as cursor:
            cursor.execute(query, arguments)
            result = {'result': 'success', 'data': cursor.fetchone()}
    except Exception:
        result = {'result': 'failure'}
    finally:
        conn.close()
        return result

def select_all(query, arguments):
    result = None      
    try:
        conn = connect()
        with conn.cursor() as cursor:
            cursor.execute(query, arguments)
            result = {'result': 'success', 'data': cursor.fetchall()}
    except Exception:
        result = {'result': 'failure'}
    finally:
        conn.close()
        return result


def delete_helper(query, arguments):
    try:
        conn = connect()
        with conn.cursor() as cursor:
            cursor.execute(query, arguments)
            conn.commit()
            result = {'result': 'success'}
    except Exception:
        result = {'result': 'failure'}
    finally:
        conn.close()
        return result

def edit_helper(query, arguments):
    try:
        conn = connect()
        with conn.cursor() as cursor:
            cursor.execute(query, arguments)
            conn.commit()
            result = {'result': 'success'}            
    except Exception:
        result = {'result': 'failure'}
    finally:
        conn.close()
        return result
