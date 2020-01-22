given_students = {
    "Thor": [1,2,3], 
    "Ironman": [3,4,5], 
    "Hulk": [2,3,4]
}

# total marks of each student
students_total = {}

for student in given_students:
    sum = 0
    
    for num in given_students[student]:
        sum += num

    students_total[sum] = student

marks_list = []

for marks in students_total:
    marks_list.append(marks)

marks_list.sort(reverse=True)

for mark in marks_list:
    print(students_total[mark])