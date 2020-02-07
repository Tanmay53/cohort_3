inputX = input("Provide input( >1 word) here to get different type cases : ")
inputX = inputX.split(" ")


def camelcase(listx):
    output = ""
    for i in range(len(listx)):
        listx[i]=listx[i].lower()
        for j in range(len(listx[i])):
            if j == 0:
                output += listx[i][j].upper()
            else:
                output += listx[i][j]

    return output


def snakecase(listx):
    output = ""
    count = 0
    for i in listx:
        i=i.lower()
        output += i+"_"

    output = output[:len(output)-1]
    return output


def hyphencase(listx):
    output = ""
    count = 0
    for i in listx:
        i=i.lower()
        output += i+"-"

    output = output[:len(output)-1]
    return output


print("CamelCase    => ", camelcase(inputX))
print("snake_case   => ", snakecase(inputX))
print("hyphen-Case  => ", hyphencase(inputX))
