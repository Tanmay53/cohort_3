li = ["Aahul", "rohit", "shyam", "kumar"]
new_li = []
for i in range(0, len(li)):
    new_li.append(li[i].lower())
count = 0
for i in range(0, len(new_li)):
    for j in range(0, len(new_li[i])):
        if new_li[i][j] == "a":
            count = count + 1
        if new_li[i][j] == "e":
            count = count + 1
        if new_li[i][j] == "i":
            count = count + 1
        if new_li[i][j] == "o":
            count = count + 1
        if new_li[i][j] == "u":
            count = count + 1
print(count)
