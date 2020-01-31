li = ["Aman", "Chaman", "Albert", "Rahul", "AAAA"]
vowelList = []
for ele in li:
    count = 0
    for char in ele:
        if char.lower() == "a" or char.lower() == "e" or char.lower() == "i" or char.lower() == "o" or char.lower() == "u":
            count += 1
    vowelList.append(count)
print(vowelList)