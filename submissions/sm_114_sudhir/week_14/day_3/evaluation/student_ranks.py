student = {
    "Sudhir" : [50,62,73],
    "Ravi" : [13,54,58],
    "Abhinav" : [20,36,49]
}

sum = 0
main_arr = []
for i, j in student.items():
    if i == "Sudhir":
        for it in range(0, len(j)):
            sum = sum + j[it]
        main_arr.append([i, sum])

    if i == "Ravi":
        for it in range(0, len(j)):
            sum = sum + j[it]
        main_arr.append([i, sum])
    
    if i == "Abhinav":
        for it in range(0, len(j)):
            sum = sum + j[it]
        main_arr.append([i, sum])

for it in range(0, len(main_arr)):
    for j in range(0, len(main_arr)-it-1):
       if main_arr[j][1] > main_arr[j+1][1]:
           temp = arr[j]
           arr[j] = arr[j+1]
           arr[j+1] = temp

print(main_arr)