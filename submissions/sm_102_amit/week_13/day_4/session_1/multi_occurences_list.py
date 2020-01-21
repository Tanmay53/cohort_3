# Given a list print the items which appear more than once
item_list = ["a", "b", "c", "b", "d", "a", "e", "f", "a"]
dictionary = dict()

for i in item_list:
    if i not in dictionary:
        dictionary[i] = 1
    elif i in dictionary:
        dictionary[i] += 1
for j in dictionary:
    if dictionary[j] > 1:
        print(j, dictionary[j])
