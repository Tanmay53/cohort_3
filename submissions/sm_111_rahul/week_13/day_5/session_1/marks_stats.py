f1 = open("marks_rand_2000.csv")
f2 = open("marks_india.txt","w")
f3 = open("marks_pak.txt","w")
f4 = open("marks_100.txt","w")
new_line = ""
ind_students_count = 0
pak_students_count = 0
ind_stu_score_50 = 0
pak_stu_score_50 = 0
for line in f1:
    if "India" in line:
        ind_students_count += 1
        new_line = line.replace("India","")
        f2.write(new_line)
        new_line = ""
    elif "Pakistan" in line:
        pak_students_count += 1
        new_line = line.replace("Pakistan","")
        f3.write(new_line)
        new_line = ""
f1.close()
f2.close()
f3.close()
f1 = open("marks_rand_2000.csv")
for line1 in f1:
    if "100" in line1:
        new_line = line1.replace("100","")
        f4.write(new_line)
    
f4.close()

f3 = open("marks_india.txt")
for line in f3:
    if "50" in line:
        ind_stu_score_50 += 1

f2 = open("marks_pak.txt")
for line in f2:
    if "50" in line:
        pak_stu_score_50 +=1
f2.close()
f3.close()       
print("pak_students_count :" + str(pak_students_count))
print("indian_students_count :" + str(ind_students_count))
print("ind_stu_score_50 :" + str(ind_stu_score_50))
print("pak_stu_score_50 :" + str(pak_stu_score_50))