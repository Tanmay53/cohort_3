import csv


def read_csv():
    temp_data = []
    with open("data/KCQT.csv") as csvfile:
        reader = csv.reader(csvfile)
        for values in reader:
            temp_data.append([values[0].split("-"), values[2], values[3]])
    return temp_data


weather_data = read_csv()


def write_csv():
    with open("data/summary.csv", "w") as csvfile:
        writer = csv.writer(csvfile, delimiter=",",
                            quotechar="|", quoting=csv.QUOTE_MINIMAL)
        writer.writerow(["year", "month", "min_temp", "max_temp"])
        for items in weather_data[1:-1]:
            writer.writerow([items[0][0], items[0][1], items[1], items[2]])


write_csv()
