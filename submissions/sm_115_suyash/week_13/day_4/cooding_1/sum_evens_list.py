even_list = [2,5,6,1,7,8,4,3]
sum = 0
for x in range(len(even_list) ):
    if even_list[x] % 2 == 0:
        sum += even_list[x]
print(sum)