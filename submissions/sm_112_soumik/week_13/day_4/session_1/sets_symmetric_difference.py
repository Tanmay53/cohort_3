input1 = input("Enter first string")
input2 = input("Enter second string")
join_input = input1 + input2

input_dict = {}
new_dict = {}
ans = ""
for letter in input1:
    if letter in input_dict:
        input_dict[letter] += 1
    else:
        input_dict[letter] = 1


for letter in join_input:
    if letter in new_dict:
        new_dict[letter] += 1
    else:
        new_dict[letter] = 1

for val, key in input_dict.items():
    for new_val, count in new_dict.items():
        if(val == new_val and count > key):
            print(val)
