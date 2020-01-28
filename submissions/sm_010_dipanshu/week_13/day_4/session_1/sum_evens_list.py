li = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 23, 14, 122, 345, 45, 56, 54, 567, 12]

even_sum = 0

for num in li:
    if num % 2 == 0:
        even_sum += num

print(even_sum)
