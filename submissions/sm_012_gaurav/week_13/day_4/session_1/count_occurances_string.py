s = input("Enter String: ")
d = {}
for a in s:
    if a not in d:
        d[a] = 1
    else:
        d[a] += 1
print(d)