a = input()
dic ={}
i = 0
count = 0
for i in range(0,len(a)):
    dic[a[i]] = i
for c in dic:
    for j in range(0,len(a)):
        if c == a[j]:
            count += 1
    print(c,count)
    count = 0
