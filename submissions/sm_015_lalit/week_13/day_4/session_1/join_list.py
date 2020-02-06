listX=["coding","with","python","at","present"]
userCharJoin=input("type the joining char here : ")
stringX=""
charLen=len(userCharJoin)
for x in listX:
    stringX+=x + userCharJoin

stringX=stringX[:-(len(userCharJoin))]
print(stringX)
  