input_value = input()
dic = {}
count = 0

for i in range(0,len(input_value)):
    dic[input_value[i]] = i
    
for c in dic:
    for j in range(0,len(input_value)):
        if c == input_value[j]:
            count += 1
    print(c,count)
    count = 0
