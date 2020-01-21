inputString = input("Enter String: ")
splitChar = input("Enter Split Character: ")
l = []
s = ''
for a in inputString:
    if a != splitChar:
        s += a
    else:
        if len(s) != 0:
            l.append(s)
            s = ''
l.append(s)
print(l)