# Print the mirror image of the given string AyzB should become ZbaY
string = input("Enter string: ")
mirror = ""

for s in string:
    v = ord(s)
    if v >= 65 and v <= 90:
        mv = 90 - (v - 65)
        mirror += chr(mv)
    elif v >= 97 and v <= 122:
        mv = 122 - (v - 97)
        mirror += chr(mv)
print(mirror)
