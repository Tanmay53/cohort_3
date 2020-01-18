# Given a list of items find the unique no of present
item_list = ["apple", "banana", "cherry", "orange",
             "kiwi", "melon", "mango", "apple", "banana", "cherry"]
item_set = set()

for i in item_list:
    if i not in item_set:
        item_set.add(i)

print(item_set)
