i = 0
string1 = ""
while i < 4:
    j = 0
    while j < 9:
        if j < 4:
            string1 += string1 + "."
        elif j == 4:
            string1 += string1 + "0"
        else:
            string1 += string1 + "."
        j += 1
    i += 1
print(string1)