import csv


def file_not_found():
    with open("data/summary.csv") as summary:
        print("File Created")


def analysis():
    try:
        obj = {}
        with open("data/summary.csv", "w",) as summary:
            fieldnames = ["year", "month", "min_temp", "max_temp"]
            writer = csv.writer(summary, delimiter=',', quotechar='|', quoting=csv.QUOTE_MINIMAL)
            writer.writerow(fieldnames)
            with open("data/KCQT.csv") as weather_file:
                reader = csv.reader(weather_file)
                print("processing.......")
                for row in reader:
                    if row[0] != 'date':
                        date = row[0].split("-")
                        year_n_month = date[0:2]
                        min_temp = row[2]
                        max_temp = row[3]
                        key = "-".join(year_n_month)
                        if obj.get(key) is None:
                            obj[key] = [min_temp, max_temp]
                        else:
                            if obj[key][0] > min_temp and obj[key][1] < max_temp:
                                obj[key] = [min_temp, max_temp]
                            elif obj[key][0] > min_temp and not obj[key][1] < max_temp:
                                obj[key] = [min_temp, obj[key][1]]
                            elif not obj[key][0] > min_temp and obj[key][1] < max_temp:
                                obj[key] = [obj[key][0], max_temp]
                            else:
                                obj[key] = [obj[key][0], obj[key][1]]

                for key in obj:
                    writer.writerow([*key.split("-"), *obj[key]])
                print("Completed")

    except FileNotFoundError:
        file_not_found()


analysis()
