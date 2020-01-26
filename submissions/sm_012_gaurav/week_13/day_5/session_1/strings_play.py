def splitStr(s, splitChar):
    l = []
    st = ''
    for a in s:
        if a == splitChar:
            if len(st) != 0:
                l.append(st)
                st = ''
        else:
            st += a
    if len(st) != 0:
        l.append(st)
    return l

def indexOf(s, c):
    idx = 0
    for i,a in enumerate(s):
        if a == c:
            idx = i
            break
    return idx

def capitalizeStr(s):
    st = ''
    capitalLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    smallLetters = 'abcdefghijklmnopqrstuvwxyz'
    for i,a in enumerate(s):
        if i == 0:
            if a not in capitalLetters:
                st += capitalLetters[indexOf(smallLetters, a)]
            else:
                st += a
        else:
            if a in capitalLetters:
                st += smallLetters[indexOf(capitalLetters, a)]
            else:
                st += a
    return st

def lowerCaseStr(s):
    st = ''
    capitalLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    smallLetters = 'abcdefghijklmnopqrstuvwxyz'
    for a in s:
        if a in capitalLetters:
            st += smallLetters[indexOf(capitalLetters, a)]
        else:
            st += a
    return st

def camel_case(s, splitChar = ' '):
    l = splitStr(s, splitChar)
    changedStr = ''
    for i in range(len(l)):
        if i == 0:
            changedStr += lowerCaseStr(l[i])
        else:
            changedStr += capitalizeStr(l[i])
    return changedStr

def hyphen_case(s, splitChar = ' '):
    l = splitStr(s, splitChar)
    changedStr = ''
    for i in range(len(l)):
        if i != len(l) - 1:
            changedStr += lowerCaseStr(l[i])+'-'
        else:
            changedStr += lowerCaseStr(l[i])
    return changedStr

def snake_case(s, splitChar = ' '):
    l = splitStr(s, splitChar)
    changedStr = ''
    for i in range(len(l)):
        if i != len(l) - 1:
            changedStr += lowerCaseStr(l[i])+'_'
        else:
            changedStr += lowerCaseStr(l[i])
    return changedStr
