'''
Read the data from the file, write functions to accomplish the below tasks
Count the number for students from India and Pakistan
Total no of students who scored below 50 marks
Total no of students who scored above 50 marks
No of students who scored exactly 50 marks (Country wise)
Create a file called marks_india.txt and marks_pakistan.txt based on the country of the students (They should not have the country name in the file)
Create a file called marks_100.txt with all the ids of the students who scored 100 marks (It should not have the marks column)
'''
f1 = open("marks_india.txt", "a")
f2 = open("marks_pakistan.txt", "a")
f3 = open("marks_100.txt", "a")
f = open("marks_rand_2000.csv", "r")
ind = 0
pak = 0
fifty_below = 0
fifty_above = 0
fifty_ind = 0
fifty_pak = 0
for line in f:
    x = line.split()
    if "India" in line:
        f1.write(str(x[0]) + " -> " + x[2] + "\n")
        ind += 1
    else:
        f2.write(str(x[0]) + " -> " + x[2] + "\n")
        pak += 1

    if int(x[0]) < 50:
        fifty_below += 1
    elif int(x[0]) > 50:
        fifty_above += 1

    if int(x[0]) == 50 and x[1] == "India":
        fifty_ind += 1
    elif int(x[0]) == 50 and x[1] == "Pakistan":
        fifty_pak += 1

    if int(x[0]) == 100:
        f3.write(x[2] + "\n")


print("No. of students from India: ", ind)
print("No. of students from Pakistan: ", pak)
print("Total no. of students who scored below 50 marks: ", fifty_below)
print("Total no. of students who scored above 50 marks", fifty_above)
print("No. of students who scored exactly 50 marks from India: ", fifty_ind)
print("No. of students who scored exactly 50 marks from Pakistan: ", fifty_pak)

f.close()
