my_str = input()
rev_str = ''
for x in range(len(my_str)-1,-1,-1):
    rev_str += my_str[x]
print(rev_str)
