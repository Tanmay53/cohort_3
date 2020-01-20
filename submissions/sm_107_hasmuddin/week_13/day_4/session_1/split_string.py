"""
Given a string and a split character generate a list
of strings from the given string, splitting at the occurence of
each split character
"""

myStr = str(input("str : "))
spChar = str(input("Split Character: "))
arr=[]
localStr = ""
for char in myStr:
    if char != spChar:
        localStr += char
    elif char == spChar:
     arr.append(localStr)
     localStr = ""

print(arr)