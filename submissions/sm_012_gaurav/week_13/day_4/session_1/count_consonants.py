word = input("Enter String: ")
cnt = 0
for a in word:
    if (a in "BCDFGHJKLMNPQRSTVWXYZ") or (a in "bcdfghjklmnpqrstvwxyz"):
        cnt += 1
print(cnt)