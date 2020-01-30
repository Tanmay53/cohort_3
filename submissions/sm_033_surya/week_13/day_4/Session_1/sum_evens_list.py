a = [2,2,2,3,4,5]
x = 0
for i in range(0,len(a)):
    if int(a[i]) % 2 == 0:
        x = x+int(a[i])
print(x)