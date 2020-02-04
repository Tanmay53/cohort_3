vowel_list = ('a','e','i','o','u','A','E','I','O','U')
my_str = input()
count = 0
for x in range(len(my_str)):
    for y in range(len(vowel_list)):
        if my_str[x] == vowel_list[y]:
            count += 1
print(count)