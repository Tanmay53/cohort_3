# Average diff
user_input = input("Enter few numbers: ")
input_list = list(map(int, user_input.split()))
even_sum = 0
odd_sum = 0
for i in range(len(input_list)):
    if i % 2 == 0:
        even_sum += input_list[i]
    else:
        odd_sum += input_list[i]
diff = even_sum - odd_sum

print("Input: ", input_list)
print("Even Sum: ", even_sum)
print("Odd Sum: ", odd_sum)
print("Diff: ", diff)

# Sample Case:
'''
Enter numbers few numbers: 5 8 6 9 1 7 3
Input:  [5, 8, 6, 9, 1, 7, 3]
Even Sum:  15
Odd Sum:  24
Diff:  -9
'''
