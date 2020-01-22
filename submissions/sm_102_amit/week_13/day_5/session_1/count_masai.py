# Count the number of times the word masai appears in the file
f = open("random_ids.txt", "r")
count = 0
for x in f:
    if "masai" in x:
        count += 1
print(count)
f.close()
