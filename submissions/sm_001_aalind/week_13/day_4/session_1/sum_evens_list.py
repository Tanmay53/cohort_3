nums_list = map(int, input("Enter numbers separated by comma(,): ").split(","))

sum = 0

for i in nums_list:
    if i % 2 == 0:
        sum += i

print(sum)