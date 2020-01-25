scores = {"Thor": [1,2,3], "Ironman": [3,4,5], "Hulk": [2,3,4]}

def swap(arr, i, j):
    temp = arr[i]
    arr[i] = arr[j]
    arr[j]  = temp

def selectionSort(arr):
    i = 0
    l = len(arr)

    while i < l - 1:
        min = i
        j = i + 1
        while j < l:
            if arr[j][1] > arr[min][1]:
                swap(arr, j, min)
            j = j + 1
        i = i + 1

def add(lst):
    sum = 0
    for num in lst:
        sum = sum + num

    return sum

def student_rank(scores):
    lst = []
    for key, value in scores.items():
        lst = lst + [[key, add(value)]]

    return lst

#--
lst = student_rank(scores)

selectionSort(lst)
for student in lst:
    print(student[0])