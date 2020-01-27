inputString = input("Enter a String: ")
upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz'
mirroredString = ''
for a in inputString:
    if a.isupper():
        idx = 0
        for i in range(26):
            if upperCaseChars[i] == a:
                idx = i
                break
        mirroredString += upperCaseChars[26 - idx - 1]
    elif a.islower():
        idx = 0
        for i in range(26):
            if lowerCaseChars[i] == a:
                idx = i
                break
        mirroredString += lowerCaseChars[26 - idx - 1]
    else:
        mirroredString += a
print(mirroredString)