limit = int(input("Enter a limit :"))
div = int(input("Enter a num to check div :"))
i = 0
to_sum = 0
while i < limit:
    if i % div == 0:
        to_sum += i
    i = i + 1
print(to_sum // limit)
