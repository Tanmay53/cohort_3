lst = ['string1', 'string2', 'string3', 'string4']
char = input('Enter join char : ').split()[0]

new_str = ''
for i,s in enumerate(lst):
    if i == 0:
        new_str = new_str + s
    else:
        new_str = new_str + ',' + s

print(new_str)
    