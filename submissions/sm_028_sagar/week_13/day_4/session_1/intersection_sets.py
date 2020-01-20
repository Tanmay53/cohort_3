a = [1,2,3,4]
b = [3,4,5,6]

intersection = []

for i in range(0,len(a)):
    for j in range(0,len(b)):
        if(a[i] == b[j]):
            intersection.append(a[i])

print(intersection)