scores = {"Thor": [1, 2, 3], "Ironman": [3, 4, 5],
          "Hulk": [2, 3, 4]}
li = []
total = 0
for key, value in scores.items():
    for x in range(0,len(value)):
        total += value[x]
    li.append([key, total])

temp = 0
for i in range(len(li)):
    for j in range(0, (len(li)-i-1)):
        if li[j][1] < li[j+1][1]:
            temp = li[j]
            li[j] = li[j+1]
            li[j+1] = temp
print(li)
