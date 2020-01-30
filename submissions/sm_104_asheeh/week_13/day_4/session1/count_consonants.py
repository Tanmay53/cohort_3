li = ["Aman", "Chaman", "Albert", "Rahul", "AAAA"]
vowelList = []
for ele in li:
    count = 0
    for char in ele:
        if char.lower() != "a" and char.lower() != "e" and char.lower() != "i" and char.lower() != "o" and char.lower() != "u":
            count += 1
    vowelList.append(count)
print(vowelList)