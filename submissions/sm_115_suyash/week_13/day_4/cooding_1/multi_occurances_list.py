print("Enter the list of items")
item_list = list(input())
multi_occ = {}
multi_occ_list = []

for item in item_list:
    if item in multi_occ:
        multi_occ[item] += 1
    else:
        multi_occ[item] = 1

for key,value in multi_occ.items():
    if value > 1:
        multi_occ_list.append(key)

print(multi_occ_list)