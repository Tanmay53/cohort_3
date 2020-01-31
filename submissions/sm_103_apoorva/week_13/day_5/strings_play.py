slist = list(input("Enter the String: ").split())
# print(slist)

small = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
caps = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']

def upperString(item):
    if item in caps:
        return item
    else:
        for i in range(len(small)):
            if item is small[i]:
                return caps[i]

def lowerString(item):
    if item in small:
        return item
    else:
        for i in range(len(caps)):
            if item is caps[i]:
                return small[i]

# a = upper("c")
# print(a)


string_list = []
string = ""
for i in slist:
    for j in i:
        string += lowerString(j)
    string_list.append(string)
    string = ""

print(string_list)


camelCase = ""

for i in range(len(string_list)):
    for j in range(len(string_list[i])):
        if i == 0 and j == 0:
            print(string_list[i][j])
            camelCase += string_list[i][j]
        elif i != 0 and j == 0:
            camelCase += upperString(string_list[i][j])
        else:
            camelCase += string_list[i][j]


def change_case(li,delimeter):
    required_case = ""
    for i in range(len(li)):
        if i == len(li)-1:
            required_case += li[i]
        else:
            required_case += li[i] + delimeter
    return required_case

snake_case = change_case(string_list,"_")
kebabCase = change_case(string_list,"-")
print(camelCase)
print(snake_case)
print(kebabCase)