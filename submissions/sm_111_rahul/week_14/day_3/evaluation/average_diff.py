li = [1,2,3,4,5,6]
i = 0
even_index_sum = 0
odd_index_sum = 0
while i < len(li):
    if i % 2 == 0:
        even_index_sum += li[i]
        i += 1
    else:
        odd_index_sum += li[i]
        i += 1
print(even_index_sum - odd_index_sum)
