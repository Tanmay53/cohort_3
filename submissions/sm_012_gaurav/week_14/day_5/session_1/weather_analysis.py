import csv

weatherDict = {}

with open('KCQT.csv') as csvfile:
    reader = csv.DictReader(csvfile)
    for a in reader:
        dateSplit = a['date'].split('-')
        if dateSplit[0] not in weatherDict:
            weatherDict[dateSplit[0]] = {dateSplit[1]: {'min_temp': [float(a['actual_min_temp'])], 'max_temp': [float(a['actual_max_temp'])]}}
        else:
            if dateSplit[1] not in weatherDict[dateSplit[0]]:
                weatherDict[dateSplit[0]][dateSplit[1]] = {'min_temp': [float(a['actual_min_temp'])], 'max_temp': [float(a['actual_max_temp'])]}
            else:
                weatherDict[dateSplit[0]][dateSplit[1]]['min_temp'].append(float(a['actual_min_temp']))
                weatherDict[dateSplit[0]][dateSplit[1]]['max_temp'].append(float(a['actual_max_temp']))   
for year in weatherDict:
    for month in weatherDict[year]:
        weatherDict[year][month]['min_temp'] = min(weatherDict[year][month]['min_temp'])
        weatherDict[year][month]['max_temp'] = max(weatherDict[year][month]['max_temp'])

with open('summary.csv', 'w') as csvfile:
    fieldnames = ['year', 'month', 'min_temp', 'max_temp']
    writer = csv.DictWriter(csvfile, fieldnames = fieldnames)
    writer.writeheader()
    for year in weatherDict:
        for month in weatherDict[year]:
            writer.writerow({'year': year, 'month': month, 'min_temp': weatherDict[year][month]['min_temp'], 'max_temp': weatherDict[year][month]['max_temp']})
