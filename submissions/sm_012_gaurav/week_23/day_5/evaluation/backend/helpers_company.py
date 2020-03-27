def getCompany(cursor):
    cursor.execute('''select * from company''')
    result = []
    for comp in cursor.fetchall():
        result.append(comp)
    return result

def addCompany(cursor, name, location):
    cursor.execute('''insert into company(name, location) values(%s, %s)''', (name, location, ))
