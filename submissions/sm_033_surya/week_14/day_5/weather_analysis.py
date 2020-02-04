import csv
import os.path


def write_data(year_month, min_temp, max_temp):
    isexists = os.path.isfile("data/summary.csv")
    with open("data/summary.csv", "a") as csvfile:
        fieldnames = ["year", "month", "min_temp", "max_temp"]
        writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
        if not isexists:
            writer.writeheader()
        writer.writerow({"year": year_month.split(
            "-")[0], "month": year_month.split("-")[1], "min_temp": min_temp, "max_temp": max_temp})


def read_csv():
    global uniqueyear_set
    uniqueyear_set = {}
    global listed_data
    listed_data = []
    with open("KCQT.csv") as csvfile:
        reader = csv.DictReader(csvfile)
        for row in reader:
            uniqueyear_set[row["date"].split(
                "-")[0]+"-"+row["date"].split("-")[1]] = row["actual_min_temp"]
            listed_data.append([row["date"].split("-")[0]+"-"+row["date"].split("-")
                                [1], row["actual_min_temp"], row["actual_max_temp"]])

    with open("KCQT.csv") as csvfile:
        reader = csv.DictReader(csvfile)
        actual_min_temp_list = []
        actual_max_temp_list = []
        temp_date = ""
        for r in uniqueyear_set:
            for row in listed_data:
                if row[0] in r:
                    # print(row[0])
                    actual_min_temp_list.append(row[1])
                    actual_max_temp_list.append(row[2])
                    temp_date = row[0]
            actual_min_temp_list.sort()
            actual_max_temp_list.sort()
            write_data(temp_date, actual_min_temp_list[0], actual_max_temp_list[len(
                actual_max_temp_list)-1])
            actual_min_temp_list = []
            actual_max_temp_list = []


read_csv()
