f1 = open("marks_rand_2000.csv")
total_students = 0
marks = 0
marks_below_50 = 0
marks_above_50 = 0
marks_is_50 = 0
marks_is_100 = []
marks_in_pakistan = []
marks_in_india = []
Pakistan = ""
for students in f1:
    total_students += 1
    data = students.split()
    marks = int(data[0])

    if marks > 50:
        marks_above_50 += 1
    elif marks < 50:
        marks_below_50 += 1
    else:
        marks_is_50 += 1
    if data[1] == "Pakistan":
        marks_in_pakistan.append([data[0], data[2]])
    else:
        marks_in_india.append([data[0], data[2]])
    if data[0] == "100":
        marks_is_100.append([data[1], data[2]])


f1.close()

print(f'total number of students {total_students}')
print(f'marks below 50 :{marks_below_50}')
print(f'marks above 50 :{marks_above_50}')
print(f'marks is equal 50 :{marks_is_50}')

f2 = open("marks_india.txt", "w")
for data in marks_in_india:
    string = str(data[0] + "   " + data[1]+"\n")
    f2.write(string)
f2.close()

f3 = open("marks_pakistan.txt", "a")
temp_str = ""
for data in marks_in_pakistan:
    temp_str = str(data[0] + "   " + data[1]+"\n")
    f3.write(temp_str)

f3.close()

f4 = open("marks_100.txt", "a")
temp_str = ""
for data in marks_is_100:
    temp_str = str(data[0] + "   " + data[1] + "\n")
    f4.write(temp_str)

f4.close()
# print(marks_in_pakistan)
