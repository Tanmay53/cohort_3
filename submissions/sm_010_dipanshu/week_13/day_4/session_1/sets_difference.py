set1 = [1, 2, 3, 4, 5]
# set2 = [4, 5, 6, 7, 8]
# set2 = [1, 2, 3, 4, 5, 6]
set2 = [0, 6, 7, 8, 9]

difference = []

for num in set1:
    if num not in set2:
        difference.append(num)

print(difference)
