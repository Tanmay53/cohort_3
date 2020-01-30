strng = "Ayzb"
# # find mirror
string1 = "abcdefghijklmnopqrstuvwxyz"
string2 = string1.upper()
mirror = ""

for char in strng:
    for i in range(0, len(string1)):
        if char == string1[i]:
            mirror += string1[25 - string1.index(string1[i])]
        elif char == string2[i]:
            mirror += string2[25 - string2.index(string2[i])]
print(mirror)
