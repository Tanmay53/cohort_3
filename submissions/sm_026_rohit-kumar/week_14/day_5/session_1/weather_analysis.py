import csv


def read_file():
    # open file for reading
    csv_reader = open('KCQT.csv', 'r')
    reader = csv.reader(csv_reader, delimiter = ',')

    # read row by row
    dict = {}
    for i, row in enumerate(reader):
        if i == 0: continue
        # find following values in each row
        year  = row[0].split('-')[0]
        month = row[0].split('-')[1]
        min_temp = row[2]
        max_temp = row[3]

        key = year + month
        if key in dict:
            if min_temp < dict[key]['min_temp']:
                dict[key]['min_temp'] = min_temp
            
            if max_temp > dict[key]['max_temp']:
                dict[key]['max_temp'] = max_temp
        else:
            dict[key] = {'year' : year, 'month' : month, 'min_temp' : min_temp, 'max_temp' : max_temp}
    csv_reader.close()

    return dict

def write_file(dict):
    # open file for writing
    csv_writer = open('summary.csv', 'w')
    writer = csv.writer(csv_writer, delimiter = ',', quotechar='|', quoting=csv.QUOTE_MINIMAL)
    # write to file

    writer.writerow(['year', 'month', 'min_temp', 'max_temp'])
    for value in dict.values():
        writer.writerow([value['year'], value['month'], value['min_temp'], value['max_temp']])

    csv_writer.close()


dict = read_file()
write_file(dict)

print('process completed')