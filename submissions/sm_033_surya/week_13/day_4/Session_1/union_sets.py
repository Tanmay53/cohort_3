list_one = [1, 3, 4, 5, 6]
list_two = [2, 5]
i = 0

while i < len(list_two):
    list_one.append(list_two[i])
    i += 1
print(list_one)