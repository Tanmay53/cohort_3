a = [1,2,3,6,7,8]
dic ={}
i = 0
li = []
count = 0
for i in range(0,len(a)):
    dic[a[i]] = i
for c in dic:
    for j in range(0,len(a)):
        if c == a[j]:
            count += 1
    if count > 1:
        li.append(c)
    count = 0
if len(li) != 0:
    print(li)
else:
    print("None")