str="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
str=str.lower()
count=0
for x in str:
    # if str[x]=="a" or str[x]=="e" or str[x]=="i" or str[x]=="o" or str[x]=="u":
    if x in ["a","e","i","o","u"]:
        count=count+1
    else :
        continue 
print(count)       

