word = input("Enter String: ")
cnt = 0
for a in word:
    if (a in 'aeiou') or (a in 'AEIOU'):
        cnt += 1
print(cnt)