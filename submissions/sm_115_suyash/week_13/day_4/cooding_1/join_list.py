print("Enter your list")
my_list = list(input())
print("Enter joining value")
join_by = input()
temp_str = ''
final_str = ''
for x in range(len(my_list)):
    if join_by not in my_list[x]:
        temp_str += my_list[x]
    else:
        final_str += temp_str + join_by
        temp_str = ''
else:
    final_str += temp_str
print(final_str)