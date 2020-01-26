numbers=[1,2,3,4,5,6]
even_sum=0
odd_sum=0
for i in range(len(numbers)):
    if i%2==0:
        even_sum+=numbers[i]
    else:
        odd_sum+=numbers[i]
print(even_sum-odd_sum)