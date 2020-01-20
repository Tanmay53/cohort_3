given_char = ['I', 'l', 'o', 'v', 'e', 'i', 'n', 'd', 'i', 'a']


str_usr = ""
for it in range(len(given_char)):
    # print(given_char[it])
    if given_char[it] != " ":
        str_usr += given_char[it]

print(str_usr)
