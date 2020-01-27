l = input("Enter Numbers (Space Seperated): ").split(' ')
s = 0
for a in l:
    if int(a)%2 == 0:
        s += int(a)
print(s)
