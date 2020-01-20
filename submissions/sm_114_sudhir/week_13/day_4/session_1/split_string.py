given_str = "I love india"

str_usr = ""
arr = []
for it in range(len(given_str)):
    if given_str[it] != " ":
        str_usr += given_str[it]
        arr.append(str_usr)
        str_usr = ""

print(arr)