limit = int(input("Enter Limit: "))
no = int(input("Enter Number: "))
i = 0
s = 0
cnt = 0
while i < limit + 1:
    if i%no == 0:
        cnt += 1
        s += i
    i += 1
print(s/cnt)
