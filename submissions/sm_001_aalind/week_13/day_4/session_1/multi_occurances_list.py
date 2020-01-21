items = list(map(int, input("Enter comma(,) separated values: ").split(',')))

dic = {}

for val in items:
    if val in dic:
        dic[val] += 1
    else:
        dic[val] = 1

for key in dic:
    if dic[key] > 1:
        print(key)