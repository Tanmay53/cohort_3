str="a,b"
splitChar=[","]
x=0
data=[]
temp=""
while x<len(str):
    if(str[x] not in splitChar):
        temp=temp+str[x]
        x=x+1
    else:
        print(temp)
        data.append(temp)
        temp=""
        x=x+1 

if(x==len(str)):
    data.append(temp) 
      
print(data)
print(str.split(","))


