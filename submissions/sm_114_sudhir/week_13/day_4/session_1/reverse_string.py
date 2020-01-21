name = input()
new_name = ""
for it in range(len(name)-1, -1, -1):
    new_name = new_name + name[it]


print(new_name)