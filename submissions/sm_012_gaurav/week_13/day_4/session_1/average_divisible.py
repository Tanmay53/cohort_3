limit = int(input("Enter Limit: "))
no = int(input("Enter Number: "))
cnt = 0
s = 0
for i in range(0, limit + 1):
    if i%no == 0:
        cnt += 1
        s += i
print(s/cnt)