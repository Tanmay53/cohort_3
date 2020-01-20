strlist = list(input().split(' '))
consCount = 0
for i in range(0,len(strlist)):
    for j in range(len(strlist[i])):
        if strlist[i][j].upper() != "A" and strlist[i][j].upper() != "E" and strlist[i][j].upper() != "I" and strlist[i][j].upper() != "O" and strlist[i][j].upper() != "U":
            consCount = consCount + 1
print(consCount)