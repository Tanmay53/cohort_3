data = input("Enter space seperated integers : ");
numbers = list(map(int , data.split()))

def average_diff(numbers):
    sum_even_indexes = 0
    odd_even_indexes = 0
    for i in range(0 , len(numbers)):
        if i % 2 is 0:
            sum_even_indexes += numbers[i]
        else :
            odd_even_indexes += numbers[i]
    return sum_even_indexes - odd_even_indexes

print(average_diff(numbers))

# @input
# Enter space seperated integers : 1 2 3 4 5 6
# @output
# -3