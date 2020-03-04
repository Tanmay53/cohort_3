string = input('Enter string : ')

char_count_dict = {}

for s in string:
    if s in char_count_dict:
        char_count_dict[s] += 1
    else:
        char_count_dict[s] = 1

for key, value in char_count_dict.items():
    print('{} : {}'.format(key, value))        