f1 = open("marks_rand_2000.csv")
f2 = open("marks_india.txt","w")
f3 = open("marks_pakistan.txt","w")
f4 = open("marks_100.txt","w")
new_line = ""
ind_count = 0
pak_count = 0
ind_student_score_50 = 0
pak_student_score_50 = 0
for line in f1:
    if "India" in line:
        ind_count += 1
        new_line = line.replace("India","")
        f2.write(new_line)
        new_line = ""
    elif "Pakistan" in line:
        pak_count += 1
        new_line = line.replace("Pakistan","")
        f3.write(new_line)
        new_line = ""
f1.close()
f2.close()
f3.close()
f1 = open("marks_rand_2000.csv")
for line in f1:
    if "100" in line:
        new_line = line.replace("100","")
        print(new_line)
        f4.write(new_line)
        new_line = ""
f4.close()
f2 = open("marks_india.txt")
for line in f2:
    if "50" in line:
        ind_student_score_50 += 1

f3 = open("marks_pakistan.txt")
for line in f3:
    if "50" in line:
        pak_student_score_50 +=1
f1.close()
f2.close()
f3.close()

print(f"pak_count : {pak_count}")
print(f"indian_students_count : {ind_count}")
print(f"ind_student_score_50 : {ind_student_score_50}")
print(f"pak_student_score_50 : {pak_student_score_50}")