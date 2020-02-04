f1 = open("/home/apoorva/coding/week_13_python_starts/day_5/marks_rand_2000.csv","r")
li = []
for line in f1:
    li.append(line.split())
f1.close()

def count_ind_pak(li):
    countInd = 0
    countPak = 0
    for i in li:
        if i[1] == "India":
            countInd += 1
        elif i[1] == "Pakistan":
            countPak +=1
    print("No of student from India is: ",countInd)
    print("No of student from Pakistan is: ",countPak)


def count_student_below_50(li):
    count = 0
    for i in li:
        if int(i[0]) < 50:
            count += 1
    print("No of student who scored below 50: ",count)

def count_student_above_50(li):
    count = 0
    for i in li:
        if int(i[0]) > 50:
            count += 1
    print("No of student who scored above 50: ",count)

def count_student_exact_50(li):
    countInd = 0
    countPak = 0
    for i in li:
        if int(i[0]) is 50 and i[1] == "India":
            countInd += 1
        elif int(i[0]) is 50 and i[1] == "Pakistan":
            countPak += 1
    print("No of student who scored exaxtly 50 is: \n","From India:",countInd,"\n","From Pakistan:",countPak)

li_marks_ind = []
li_marks_pak = []
li_id = []
new_li = []
for i in li:
    if i[1] == "India":
        new_li.append(i[0])
        new_li.append(i[2])
        li_marks_ind.append(new_li)
        new_li = []
for i in li:
    if i[1] == "Pakistan":
        new_li.append(i[0])
        new_li.append(i[2])
        li_marks_pak.append(new_li)
        new_li = []
for i in li:
    if int(i[0]) is 100:
        li_id.append(i[2])

# print(li_marks_ind)
# print(li_marks_pak)
# print(li_id)

def student_marks_by_country(li,path):
    f1 = open(path,"w")
    for i in li:
        f1.writelines(str(i) + "\n")
    f1.close()

def student_id_for_cent(li,path):
    f1 = open(path,"w")
    for i in li:
        f1.writelines(i + "\n")
    f1.close()
count_ind_pak(li)
count_student_below_50(li)
count_student_above_50(li)
count_student_exact_50(li)
student_marks_by_country(li_marks_ind,"/home/apoorva/coding/week_13_python_starts/day_5/marks_india.txt")
student_marks_by_country(li_marks_pak,"/home/apoorva/coding/week_13_python_starts/day_5/marks_pakistan.txt")
student_id_for_cent(li_id,"/home/apoorva/coding/week_13_python_starts/day_5/marks_100.txt")