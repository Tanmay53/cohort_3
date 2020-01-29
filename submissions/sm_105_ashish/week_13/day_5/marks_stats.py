f1 = open('marks_rand_2000.csv')

students_from_India = 0
students_from_pak = 0
for line in f1:
    if 'India' in line:
        students_from_India += 1
    else:
        students_from_pak += 1

# print(students_from_India)
# print(students_from_pak) 

f1.close()