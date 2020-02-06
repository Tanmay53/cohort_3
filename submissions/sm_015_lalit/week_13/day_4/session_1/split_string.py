stringx=list(input("type string here : "))
charx=(input("type char now : "))
sumStr=""
listX=[]
for x in stringx:
  if x==charx:
    if len(sumStr) > 0:
      listX.append(sumStr)
      sumStr=""
  else:
    sumStr+=x
    
if len(sumStr) > 0:    
  listX.append(sumStr)

print(listX)