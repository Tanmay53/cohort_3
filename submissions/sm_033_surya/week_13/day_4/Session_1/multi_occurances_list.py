input_list = [1, 2, 3, 6, 7, 8]
dic = {}
li = []
count = 0

for i in range(0, len(input_list)):
    dic[input_list[i]] = i
    
for c in dic:
    for j in range(0, len(input_list)):
        if c == input_list[j]:
            count += 1
    if count > 1:
        li.append(c)
    count = 0
if len(li) != 0:
    print(li)
else:
    print("None")
