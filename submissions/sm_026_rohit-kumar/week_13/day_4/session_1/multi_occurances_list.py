lst = [1,2,2,2,3,3,4,4,4]

dict = {}
new_lst = []

for i in lst:
    if i in dict:
        dict[i] += 1
    else:
        dict[i] = 1

for key, value in dict.items():
    if value > 1:
        new_lst.append(key)

print(new_lst)

