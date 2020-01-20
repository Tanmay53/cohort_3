def camel_case(string):
    newStr=""
    flag=False
    for char in string:
        if char == " ":
            flag=True
        elif flag:
            newStr+=char.upper()
            flag=False
        else:
            newStr+=char
    return newStr

def snake_case(string):
    newStr=""
    for char in string:
        if char == " ":
            newStr+="_"
        else:
            newStr+=char
    return newStr

def hyphen_case(string):
    newStr=""
    for char in string:
        if char == " ":
            newStr+="-"
        else:
            newStr+=char
    return newStr

x = input("Enter a string: ")
x=x.casefold()
print(camel_case(x))
print(snake_case(x))
print(hyphen_case(x))