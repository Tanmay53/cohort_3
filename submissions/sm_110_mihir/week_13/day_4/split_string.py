li=[]
name="masai school is transforming education "
seperator=" "
temp=""
for char in name:
    if char != seperator:
        temp+= char
    if char == seperator:
        li.append(temp)
        temp=""
li.append(temp)
print(li)