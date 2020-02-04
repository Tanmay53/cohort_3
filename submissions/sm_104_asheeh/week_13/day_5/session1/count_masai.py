f1 = open("random_ids.txt", "r")
count = 0
word = "masai"
for line in f1:
    count += line.count(word)   # here I have used count() function.
print(count)
f1.close()