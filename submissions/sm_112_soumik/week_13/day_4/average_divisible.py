limit = int(input("Enter a limit :"))
div = int(input("Enter a num to check div :"))
to_sum = 0

for num in range(0, limit + 1, div):
    print(num)
    to_sum += num

print(to_sum / limit)
