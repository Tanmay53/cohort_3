slist = list(input("Enter the String: ").split())
print(slist)
string_list = []
for i in slist:
    string_list.append(i.lower())
print(string_list)
camelCase = ""
snake_case = ""
kebabCase = ""

for i in range(len(string_list)):
    for j in range(len(string_list[i])):
        if i == 0 and j == 0:
            print(string_list[i][j])
            camelCase += string_list[i][j]
        elif i != 0 and j == 0:
            camelCase += string_list[i][j].upper()
        else:
            camelCase += string_list[i][j]
print(camelCase)

for i in range(len(string_list)):
    if i == len(string_list)-1:
        snake_case += string_list[i]
    else:
        snake_case += string_list[i] + "_"
print(snake_case)

for i in range(len(string_list)):
    if i == len(string_list)-1:
        kebabCase += string_list[i]
    else:
        kebabCase += string_list[i] + "-"
print(kebabCase)