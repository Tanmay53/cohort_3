# input string between a to z or A to Z
my_str = input()
count = 0
for x in range(len(my_str)):
    if my_str[x].lower() != 'a' and my_str[x].lower() != 'e' and my_str[x].lower() != 'i' and my_str[x].lower() != 'o' and my_str[x].lower() != 'u':
        count += 1
print(count)