print("Enter Set A")
set_A = list(input())
print("Enter Set B")
set_B = list(input())
set_diff = {}
for num in set_A:
    if num not in set_B:
        set_diff[num] = num

print(list(set_diff.keys()))