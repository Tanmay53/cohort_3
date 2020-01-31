print('Enter your string')
my_str = input()
print("Enter splited value")
split_by = input()
temp_str = ''
final_arr = []
for x in range(len(my_str)):
    if split_by in my_str[x]:
        final_arr.append(temp_str)
        temp_str = ''
    else:
        temp_str += my_str[x]
else:
    final_arr.append(temp_str)
print(final_arr)
