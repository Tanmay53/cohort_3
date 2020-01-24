li =  ["Masai", "School"]
result={}
for items in li:
    for char in items:
        if char == " ":
            continue
        elif char in result:
            result[char]=result[char]+1
        else:
            result[char]=1
print(result)