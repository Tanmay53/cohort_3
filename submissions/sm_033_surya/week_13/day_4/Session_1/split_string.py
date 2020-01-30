a = "a,b,c,d"
scha = ","
str = []
temp = ""
for i in range(0,len(a)):
    if a[i] == scha:
        str.append(temp)
        temp =""
    else:
        temp = temp + a[i]
    if i == len(a)-1:
       str.append(temp)

print(str)
    