# Given a string print the number of times each character appears in the string
string = input("Enter string: ")
dictionary = dict()

for s in string:
    if s == " ":
        continue
    if s not in dictionary:
        dictionary[s] = 1
    elif s in dictionary:
        dictionary[s] += 1
print(dictionary)
