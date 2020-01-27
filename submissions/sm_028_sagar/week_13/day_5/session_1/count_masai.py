f1 = open('random_ids.txt')
count = 0
for line in f1:
    if 'masai' in line:
        count += 1
        print(line)
f1.close()

print(count)