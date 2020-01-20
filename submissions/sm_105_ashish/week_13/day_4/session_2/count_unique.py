list = [1,1,1,2,2,3,4,5,7,9,8,8,12,7,5,"boy","a","a","c"]
unique_count = set()

for i in list:
    if i not in unique_count:
        unique_count.add(i)
print(unique_count)