string = input('Enter string : ')

dict = {}

for s in string:
    if s in dict:
        dict[s] += 1
    else:
        dict[s] = 1

for key, value in dict.items():
    print('{} : {}'.format(key, value))        