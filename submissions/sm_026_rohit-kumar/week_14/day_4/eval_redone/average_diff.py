num_list = [1,2,3,4,5,6]

def average_diff(arr):
    even_sum = 0
    odd_sum  = 0

    # sum of nums present at even index
    for i in range(0, len(arr), 2):
        even_sum = even_sum + arr[i]
    
    # sum of nums present at odd index
    for i in range(1, len(arr), 2):
        odd_sum = odd_sum + arr[i]

    return even_sum - odd_sum


# call the function
print(average_diff(num_list))