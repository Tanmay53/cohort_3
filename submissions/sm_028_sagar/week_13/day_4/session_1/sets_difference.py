name1 = {'sagar','gaurav','chinmay'}
name2 = {'chinmay','piyush','prabhat'}

sets_diff = set({})

# sets_diff = set.difference(name1,name2)
for i in name1:
    if i not in name2:
        sets_diff.add(i)

print(sets_diff)