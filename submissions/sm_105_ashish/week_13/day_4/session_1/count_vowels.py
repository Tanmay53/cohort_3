strlist = list(input().split(' '))
vowelCount = 0
for i in range(0,len(strlist)):
    for j in range(len(strlist[i])):
        if strlist[i][j].upper() == "A" or strlist[i][j].upper() == "E" or strlist[i][j].upper() == "I" or strlist[i][j].upper() == "O" or strlist[i][j].upper() == "U":
            vowelCount = vowelCount + 1
print(vowelCount)