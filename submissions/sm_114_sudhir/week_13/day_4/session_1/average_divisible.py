num = int(input("Enter the number: "))
div_num = int(input("Enter the Divisible number: "))

total = 0
cnt = 0
for it in range(1, num + 1):
    if it % div_num == 0:
        total = total + it
        cnt += 1
        # print(it)

avg = total / cnt
print(avg)