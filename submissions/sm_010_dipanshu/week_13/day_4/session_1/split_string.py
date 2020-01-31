string = "iamastudentatmasaischool"
split_char = "a"

split_index_arr = []

count = 0
for char in string:
    if char == split_char:
        split_index_arr.append(count)
    count += 1

split_strings = []
for index in split_index_arr:
    split1 = string[0:index]
    split2 = string[index + 1:]

    split_strings.append(split1)
    split_strings.append(split2)

print(split_strings)
