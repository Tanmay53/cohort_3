input_list = [1, 1, 2, 3, 4, 4, 5, 6, 7]
newset = {input_list[0]}
count = 0
total_count = 0

for i in range(1, len(input_list)):
    newset.add(input_list[i])
    
for i in newset:
    for j in input_list:
        if i == j:
            count += 1
    if count == 1:
        total_count += 1
    count = 0
    
print(total_count)
