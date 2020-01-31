str="Hello Masai"
x=1
res=""
while x <= len(str):
    res=res+str[-x]
    x=x+1
print(res)    