# reading a file
f1 = open("marks_rand_2000.csv", "r")

countIndia = 0
countPak = 0
countBelow50 = 0
countAbove50 = 0
countEqual50India = 0
countEqual50Pak = 0

for line in f1:
    countIndia += line.count("India")
    countPak += line.count("Pakistan")
    marks = int(list(line.split())[0])
    country = list(line.split())[1]
    if marks < 50:
        countBelow50 += 1
    elif marks > 50:
        countAbove50 += 1
    elif marks == 50 and country == "India":
        countEqual50India += 1
    elif marks == 50 and country == "Pakistan":
        countEqual50Pak += 1
    
print("Number of students from India: ",countIndia)
print("Number of students from Pakistan: ",countPak)
print("Total number of students below 50 marks: ", countBelow50)
print("Total number of students above 50 marks: ", countAbove50)
print("Students having 50 marks from India: ", countEqual50India)
print("Students having 50 marks from Pakistan:", countEqual50Pak)

f1.close()

# writing into a seperate file
f1 = open("marks_rand_2000.csv", "r")
f2 = open("marks_india.txt", "w")
f3 = open("marks_pakistan.txt", "w")
f4 = open("marks_100.txt", "w")

for line in f1:
    marks = list(line.split())[0]
    country = list(line.split())[1]
    identity = list(line.split())[2]
    if country == "India":
        f2.write(marks + " " + identity + "\n")
    elif country == "Pakistan":
        f3.write(marks + " " + identity + "\n")
    if int(marks) == 100:
        f4.write(country + " " + identity + "\n")

f4.close()
f3.close()
f2.close()
f1.close()