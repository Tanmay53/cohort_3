li = ["Rahul", "Sharma"]
dict = {}
for i in li:
    for j in i:
        if j in dict:
            dict[j] += 1
        else:
            dict[j] = 1
print(dict)