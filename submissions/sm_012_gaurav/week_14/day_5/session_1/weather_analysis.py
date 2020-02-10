import csv

weatherDict = {}

with open('KCQT.csv') as csvfile:
    reader = csv.reader(csvfile, delimiter = ',', quotechar = '"')
    for i, a in enumerate(reader):
        if i > 0:
            dateSplit = a[0].split('-')
            if dateSplit[0] not in weatherDict:
                weatherDict[dateSplit[0]] = {dateSplit[1]: {'min_temp': [float(a[2])], 'max_temp': [float(a[3])]}}
            else:
                if dateSplit[1] not in weatherDict[dateSplit[0]]:
                    weatherDict[dateSplit[0]][dateSplit[1]] = {'min_temp': [float(a[2])], 'max_temp': [float(a[3])]}
                else:
                    weatherDict[dateSplit[0]][dateSplit[1]]['min_temp'].append(float(a[2]))
                    weatherDict[dateSplit[0]][dateSplit[1]]['max_temp'].append(float(a[3]))   
for year in weatherDict:
    for month in weatherDict[year]:
        weatherDict[year][month]['min_temp'] = min(weatherDict[year][month]['min_temp'])
        weatherDict[year][month]['max_temp'] = max(weatherDict[year][month]['max_temp'])

with open('summary.csv', 'w') as csvfile:
    writer = csv.writer(csvfile, delimiter = ',', quotechar='|', quoting = csv.QUOTE_MINIMAL)
    writer.writerow(['year', 'month', 'min_temp', 'max_temp'])
    for year in weatherDict:
        for month in weatherDict[year]:
            writer.writerow([year, month, weatherDict[year][month]['min_temp'], weatherDict[year][month]['max_temp']])
