string = "aalind sharma"
split_string = "a"
arr = []
last_i = 0
str = ""

for i in range(len(string)):
    if string[i] != split_string:
        str += string[i]
    else:
        arr.append(str)
        str = ""

arr.append(str)

print(arr)