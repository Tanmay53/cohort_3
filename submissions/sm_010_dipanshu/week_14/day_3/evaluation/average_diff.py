print("Enter space separated numbers")
numbers = list(map(int, input().split()))

# numbers = [1, 2, 3, 4, 5, 6]  # hard coded values

even_index_sum = 0
odd_index_sum = 0
sum_diff = 0

for i in range(len(numbers)):
    if (i % 2 == 0):
        even_index_sum += numbers[i]
    else:
        odd_index_sum += numbers[i]

sum_diff = even_index_sum - odd_index_sum
print(sum_diff)
