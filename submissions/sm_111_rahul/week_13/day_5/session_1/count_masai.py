f1 = open("random_ids.txt")
total = 0
for line in f1:
    total += line.count("masai")
f1.close()
print(total)