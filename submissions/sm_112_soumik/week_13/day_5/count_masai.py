li = open("random_ids.txt", "r")
search = ""
count = 0
for items in li:
    if "masai" in items:
        count += 1
li.close()

print(count)
