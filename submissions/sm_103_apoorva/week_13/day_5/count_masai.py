f1 = open("/home/apoorva/coding/week_13_python_starts/day_5/random_ids.txt","r")
count = 0
for line in f1:
    if "masai" in line:
        count += 1
f1.close()
print(count)