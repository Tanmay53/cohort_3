inputstr = "rahul is masai"
userlist = []
str=''
for i in range(len(inputstr)):
    if inputstr[i] != ' ':
        str += inputstr[i]
    else:
        userlist.append(str)
        str =''
userlist.append(str)
print(userlist)
    
   
        