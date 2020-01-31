print("Enter the string")
given_str = input()
count_str = {}

for char in given_str:
    if char in count_str:
        count_str[char] += 1
    else:
        count_str[char] = 1
print(count_str)