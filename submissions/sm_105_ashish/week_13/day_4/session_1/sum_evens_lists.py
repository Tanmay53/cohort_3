inputlist = list(input().split(' '))
sum = 0
for x in range(len(inputlist)-1):
    if int(inputlist[x])%2 == 0:
        sum = sum + int(inputlist[x])
print(sum)