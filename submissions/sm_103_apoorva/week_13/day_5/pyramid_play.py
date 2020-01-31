level = int(input("Enter the level of pyramid: "))

def pyramid_list(level):
    li = []
    string = ""
    for i in range(level):
        for j in  range(level-i):
            string += "."
        for j in range(i+1):
            string += "0."
        for j in range(level-i-1):
            string += "."
        li.append(string)
        string = ""
    return li

def pyramid(level):
    li = pyramid_list(level)
    for i in li:
        print(i)

def inverse_pyramid(level):
    li = pyramid_list(level)
    li.reverse()
    for i in li:
        print(i)

def rhombus(level):
    li = pyramid_list(level)
    for i in li:
        print(i)
    li.reverse()
    reverse = li[1:]
    for i in reverse:
        print(i)

pyramid(level)
print("\n")
inverse_pyramid(level)
print("\n")
rhombus(level)


