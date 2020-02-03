print('Enter Set A')
set_A = list(input())
print('Enter Set B')
set_B = list(input())
count = 0
union_set = {}
for num1 in set_A:
    union_set[num1] = num1

for num2 in set_B:
    union_set[num2] = num2
    
print(list(union_set.keys()))