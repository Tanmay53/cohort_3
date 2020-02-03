import csv


def write_csv(marks, id, source_link):
    with open(source_link, "a") as csvfile:
        writer = csv.writer(csvfile, delimiter=" ", quotechar='"')
        writer.writerow([marks, id])


def marks_100(input_value):
    for row in input_value:
        if int(row[0]) == 100:
            with open("marks_100.txt", "a") as csvfile:
                writer = csv.writer(csvfile, delimiter=" ", quotechar='"')
                writer.writerow([row[2]])


def read_csv():
    count_India = 0
    count_Pakistan = 0
    count_above = 0
    count_below = 0
    count_equal = 0
    with open("marks_rand_2000.csv") as csvfile:
        reader = csv.reader(csvfile, delimiter=" ", quotechar='"')
        for row in reader:
            if "India" in row[1]:
                source = "marks_india.txt"
                count_India += 1
                write_csv(row[0], row[2], source)
            else:
                source = "marks_pakistan.txt"
                count_Pakistan += 1
                write_csv(row[0], row[2], source)
            if int(row[0]) > 50:
                count_above += 1
            else:
                count_below += 1
            if int(row[0]) == 50:
                count_equal += 1
        marks_100(reader)
    print("No.of Indian students :" + str(count_India))
    print("No.of Pakistan students :" + str(count_Pakistan))
    print("No.of marks above 50 :" + str(count_above))
    print("No.of marks below 50 :" + str(count_below))
    print("No.of marks equal to 50 :" + str(count_equal))


read_csv()
