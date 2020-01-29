string = input("Enter a string")
char = input("Enter a character to split by")
store = ""
ans = []
for num in string:
    if num == char:
        ans.append(store)
        store = ""
    else:
        store += num
ans.append(store)
print(ans)
