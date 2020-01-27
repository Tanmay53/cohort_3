# Student rank
scores = {
    "Thor": [1, 2, 3],
    "Ironman": [3, 4, 5],
    "Hulk": [2, 3, 4]
}
print("#", scores)
# sort function


def sort_list(student_list):
    l = len(student_list)
    for i in range(l):
        for j in range(l - i - 1):
            if student_list[j][0] < student_list[j + 1][0]:
                temp = student_list[j]
                student_list[j] = student_list[j + 1]
                student_list[j + 1] = temp
    return student_list


for x in scores:
    total = 0
    for marks in scores[x]:
        total += marks
    scores[x] = total

student_list = list()
for item in scores:
    student_list.append([scores[item], item])

sorted_list = sort_list(student_list)
for x in sorted_list:
    print(x[1])

# Sample Case:
'''
# {'Thor': [1, 2, 3], 'Ironman': [3, 4, 5], 'Hulk': [2, 3, 4]}
Ironman
Hulk
Thor
'''
