givenList = ["Masai", "School"]
lettersCount = {}
for a in givenList:
    for b in a:
        if b != ' ':
            if b not in lettersCount:
                lettersCount[b] = 1
            else:
                lettersCount[b] += 1

for a in lettersCount:
    print(a, "-", lettersCount[a])