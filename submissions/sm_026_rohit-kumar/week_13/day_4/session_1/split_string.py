string = input('Enter string : ')
char = input('Enter split char : ').split()[0]


temp_str = ''
lst = []
for c in string:
    if c != char:
        temp_str = temp_str + c
    else:
        lst.append(temp_str)
        temp_str = ''

lst.append(temp_str)
print(lst)
