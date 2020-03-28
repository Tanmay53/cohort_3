def addJob(cursor, title, salary, openings, companyId):
    cursor.execute('''insert into jobs(title, salary, openings, company_id) values(%s, %s, %s, %s)''',
                    (title, salary, openings, companyId, ))

def getJobs(cursor, company, location, sortBy, sortType, page):
    queryString = ''
    queryString2 = ''
    compSign = '='
    locSign = '='
    if not company:
        compSign = 'is not'
        company = None
    if not location:
        locSign = 'is not'
        location = None
    if sortBy:
        queryString = 'select jobs.id as jobId, title, salary, openings, name, location from jobs left join company on jobs.company_id = company.id where name ' + compSign + ' %s and location ' + locSign + ' %s order by ' + sortBy + ' ' + sortType + ', jobs.id limit %s, %s'
        queryString2 = '''select count(jobs.id) as cnt from jobs left join company on jobs.company_id = company.id where name ''' + compSign + ''' %s and location ''' + locSign + ''' %s order by ''' + sortBy + ''' ''' + sortType + ''', jobs.id'''
    else:
        queryString = '''select jobs.id as jobId, title, salary, openings, name, location from jobs left join company on jobs.company_id = company.id where name ''' + compSign + ' %s and location ' + locSign + ' %s limit %s, %s'
        queryString2 = '''select count(jobs.id) as cnt from jobs left join company on jobs.company_id = company.id where name ''' + compSign + ''' %s and location ''' + locSign + ''' %s'''
    cursor.execute(queryString, (company, location, (page - 1)*10, 10))
    results = []
    s = 0
    for jobs in cursor.fetchall():
        results.append(jobs)
        s += jobs['openings']
    cursor.execute(queryString2, (company, location))
    result = cursor.fetchone()
    return results, s, result['cnt']

def updateJob(cursor, title, salary, openings, jobId):
    cursor.execute('''update jobs set title=%s, salary=%s, openings=%s where id=%s''', (title, salary, openings, jobId))

def deleteJob(cursor, jobId):
    cursor.execute('''delete from jobs where id=%s''', (jobId, ))