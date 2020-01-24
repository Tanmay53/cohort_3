numbers = list(map(int,input().split()))

def average_diff(num):
    even_index_sum = 0
    odd_index_sum = 0

    for i in range(len(numbers)):
        if i % 2 == 0:
            even_index_sum += numbers[i]
        else:
            odd_index_sum += numbers[i]
            
    print(even_index_sum - odd_index_sum)
    
average_diff(numbers)

#input - 5 4 3 2 1  output: 3
#input - 10 20 30 40 50 60  output: -30
