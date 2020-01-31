print('Enter Set A')
set_A = list(input())
print('Enter Set B')
set_B = list(input())
count = 0
symmetric_diff = {}
for num1 in set_A:
    if num1 not in set_B:
        symmetric_diff[num1] = num1

for num2 in set_B:
    if num2 not in set_A:
        symmetric_diff[num2] = num2

    
print(list(symmetric_diff.keys()))