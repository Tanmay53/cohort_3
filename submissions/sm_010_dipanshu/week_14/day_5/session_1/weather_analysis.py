import csv
import datetime


def analyse_weather():
    csvfile = open("data/KCQT.csv", "r")
    reader = csv.reader(csvfile, delimiter=",", quotechar="\"")
    date_format = "%Y-%m-%d"

    years = {}

    count = 1
    for row in reader:
        if not count == 1:
            date_in_col = row[0]

            date = datetime.datetime.strptime(date_in_col, date_format)
            year = date.year
            month = date.month
            day = date.day

            if year not in years:
                months = {}
                months[month] = [[int(row[2]), int(row[3])]]
                years[year] = months
            else:
                months = years[year]

                if month not in months:
                    months[month] = [[int(row[2]), int(row[3])]]
                else:
                    temp = months[month]
                    temp.append([int(row[2]), int(row[3])])
                    months[month] = temp
                    years[year] = months

        count += 1

    csvwritefile = open("data/summary.csv", "w")
    writer = csv.writer(csvwritefile, delimiter=",", quotechar="\"")
    writer.writerow(["year", "month", "min_temp", "max_temp"])

    for key, value in years.items():
        current_year = key
        for key, value in value.items():
            row = []
            row.append(current_year)
            row.append(key)
            min_temp = value[0][0]
            max_temp = value[0][1]
            for i in range(len(value)):
                if int(value[i][0]) < min_temp:
                    min_temp = value[i][0]
                elif value[i][1] > max_temp:
                    max_temp = value[i][1]
            row.append(min_temp)
            row.append(max_temp)
            writer.writerow(row)

    csvfile.close()
    csvwritefile.close()


analyse_weather()
