revStr = str(input("Reverse: "))

limit = len(revStr)-1

while limit >= 0:
    print(revStr[limit], end="")
    limit -= 1
