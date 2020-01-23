# Count letters
string = input("Enter your string: ")
string_list = list(string.split())
count = 0
result = dict()
for x in string_list:
    for c in x:
        if c == " ":
            continue
        if c in result:
            result[c] += 1
        else:
            result[c] = 1


print("#: ", string_list)
for x in result:
    print(x + " - " + str(result[x]))

# Sample Case:
'''
Enter your string: Masai School
#:  ['Masai', 'School']
M - 1
a - 2
s - 1
i - 1
S - 1
c - 1
h - 1
o - 2
l - 1
'''
