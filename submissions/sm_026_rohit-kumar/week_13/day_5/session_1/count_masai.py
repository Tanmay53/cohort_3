def isMatch(line):
    count = 0

    L = len(line)
    for i, ch in enumerate(line):
        if ch == 'm':
            flag = True
            for j, c in enumerate("masai"):
                if i+j < L and c != line[i+j]:
                    flag = False
            if flag:
                count = count + 1
    return count

f = open('random_ids.txt', 'r')

count = 0
for l in f:
    count = count + isMatch(l)
f.close()

print(count)