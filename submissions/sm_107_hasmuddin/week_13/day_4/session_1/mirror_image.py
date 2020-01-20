str = str(input("mirror str: "))
small="abcdefghijklmnopqrstuvwxyz"
caps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
mirror = ""
for st in range(len(str)):
    if (str[st].isupper()):
        ind = caps.index(str[st])
        mirrIndex = 25 - ind
        mirror += caps[mirrIndex]
    else:
        ind = small.index(str[st])
        mirrIndex = 25 - ind
        mirror += small[mirrIndex]

print(mirror)
