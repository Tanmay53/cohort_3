print("Enter super set")
set_A = list(input())
print("Enter subset")
set_B = list(input())
count = 0
for num in set_B:
    if num in set_A:
        count += 1
if count == len(set_B):
    print("Set A is superset of Set B")
else:
    print("Set A is not superset of Set B")