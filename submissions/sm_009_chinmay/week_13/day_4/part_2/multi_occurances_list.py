# Given a list print the items which appear more than once (HINT: Use dictionaries)
input_list = ['a','b', 'c', 'a', 'd', 'd']
multi_occurance_dict = {}

for i in range(len(input_list)):
    if input_list[i] not in multi_occurance_dict:
        multi_occurance_dict[input_list[i]]=1
    else:
        multi_occurance_dict[input_list[i]] = multi_occurance_dict.get(input_list[i])+1
print((multi_occurance_dict))

for key, value in multi_occurance_dict.items():
    if value>1:
        print(key)