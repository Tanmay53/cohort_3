lst = input('Enter numbers seperated by space : ').split(' ')

sum = 0
for n in lst:
    if n.strip() != '' and int(n) % 2 == 0:
        sum = sum + int(n)


print(sum)        
