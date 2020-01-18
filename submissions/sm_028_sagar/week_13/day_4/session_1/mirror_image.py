a = 'AyzB'

cap = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
small = 'abcdefghijklmnopqrstuvwxyz'
string = ''

for i in range(0,len(a)):
    for j in range(0,len(cap)):
        if(cap[j] == a[i]):
            string += cap[-(j+1)]
    for k in range(0,len(small)):
        if(small[k] == a[i]):
            string += small[-(k+1)]
print(string)