given_students = {
    "Thor": [1,2,3], 
    "Ironman": [3,4,5], 
    "Hulk": [2,3,4]
}
students_total = {}

for student in given_students:
    sum = 0

    for num in given_students[student]:
        sum += num

    students_total[student] = sum

print(students_total)