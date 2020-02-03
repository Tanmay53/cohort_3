print('Enter Set A')
set_A = list(input())
print('Enter Set B')
set_B = list(input())
count = 0
intersection_set = {}
for num in set_A:
    if num in set_B:
        intersection_set[num] = num

    
print(list(intersection_set.keys()))