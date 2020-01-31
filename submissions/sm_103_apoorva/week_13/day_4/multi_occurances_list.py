li = list(input("Enter values of 1st set: ").split())
print(li)
dictionary = {}
for i in li:
    if i in dictionary:
        dictionary[i] += 1
    else:
        dictionary[i] = 1
for key in dictionary:
    if dictionary[key] > 1:
        print(key)