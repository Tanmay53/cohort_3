numbers = [1,2,3,4,5,6]

Even_Index_Sum = 0
Odd_Index_Sum = 0

for i in range(len(numbers)):
    if i%2 == 0:
        Even_Index_Sum += numbers[i]
    else:
        Odd_Index_Sum += numbers[i]

Diff = Even_Index_Sum - Odd_Index_Sum

print(Diff)