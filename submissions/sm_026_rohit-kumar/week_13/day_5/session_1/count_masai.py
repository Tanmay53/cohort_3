f = open('random_ids.txt', 'r')

count = 0
for l in f:
    if 'masai' in l:
        count = count + 1
f.close()

print(count)