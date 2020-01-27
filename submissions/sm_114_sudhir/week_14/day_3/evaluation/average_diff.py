numbers = [1,2,3,4,5,6]

even_sum = 0
odd_sum = 0

for it in range(0, len(numbers)):
    if it % 2 == 0:
        even_sum += numbers[it]
    else:
        odd_sum += numbers[it]

diff = even_sum - odd_sum
print(even_sum, odd_sum)
print(diff)