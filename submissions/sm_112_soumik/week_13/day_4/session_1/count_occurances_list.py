
input1 = input("Enter a string ! :")

obj = {}

for char in input1:
    if char in obj:
        obj[char] += 1
    else:
        obj[char] = 1

print(obj)
