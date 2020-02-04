print("Enter set")
set_b = list(input())
print("Enter subset")
set_a = list(input())
count = 0
for num in set_b:
    if num in set_a:
        count += 1
if count == len(set_a):
    print("Set A is subset of Set B")
else:
    print("Set A is not subset of Set B")