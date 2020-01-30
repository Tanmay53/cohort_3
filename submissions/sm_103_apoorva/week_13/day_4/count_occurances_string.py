string = input("Enter values of list of items : ")
print(string)
dictionary = {}
for i in string:
    if i in dictionary:
        dictionary[i] += 1
    else:
        dictionary[i] = 1
print(dictionary)
