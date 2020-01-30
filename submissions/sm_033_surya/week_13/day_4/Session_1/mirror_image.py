str = "AyzB"
Cap = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
Sam = "abcdefghijklmnopqrstuvwxyz"
i = 0
x = 0
y = 0
out =""
for i in range(0,len(str)):
    if str[i] in Cap:
        x = Cap.index(str[i])
        x = 25 - x 
        out = out+Cap[x]
    else:
        y = Sam.index(str[i])
        y = 25 - y
        out = out +Sam[y]
print(out)