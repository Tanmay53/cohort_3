"""
Given a list and a character, generate a string joining each
item in the list with the given character
(NOTE: You can't use inbuilt methods)
"""
myStr = list(str(input("str : ")).split())
print(myStr)
spChar = str(input("join Character: "))

res = ""
for char in myStr:
    res += spChar+char

print(res)

