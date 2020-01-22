l = input("Enter List Values(Space Seperated): ").split()
d = {}
for a in l:
    if a not in d:
        d[a] = 1
    else:
        d[a] += 1
for a in d:
    if d[a] > 1:
        print(a)