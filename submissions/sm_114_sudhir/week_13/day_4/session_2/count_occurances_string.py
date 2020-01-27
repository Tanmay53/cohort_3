usr_str = "ilovemyindia"
str_dict = {}

for i in usr_str:
    if i not in str_dict:
        str_dict[i] = 1
    else:
        str_dict[i] += 1

print(str_dict)