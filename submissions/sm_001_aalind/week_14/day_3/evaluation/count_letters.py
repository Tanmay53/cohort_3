given_list = ["Masai", "School"]
char_dict = {}

for element in given_list:
    for char in element:
        if char in char_dict:
            char_dict[char] += 1
        else:
            char_dict[char] = 1

for key in char_dict:
    print(f'{key} - {char_dict[key]}')