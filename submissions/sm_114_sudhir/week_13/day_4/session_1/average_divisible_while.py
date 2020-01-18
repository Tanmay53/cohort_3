num = int(input("Enter the number: "))
div_num = int(input("Enter the div num: "))

total = 0
avg = 0
cnt = 0
i = 1
while i <= num:
    if i % div_num == 0:
        # print(i)
        total = total + i
        cnt += 1
    i += 1

avg = total / cnt
print(avg)