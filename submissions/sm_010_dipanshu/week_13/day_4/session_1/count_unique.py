li = [1, 2, 3, 4, 5, 6, 1, 2, 3, 2, 3, 4, 7, 8, 9, 0]

unique = {}  # using dictionary

for num in li:
    if num not in unique:
        unique[num] = num

print(len(list(unique.keys())))

unique_set = set(li)  # using sets
print(len(unique_set))
