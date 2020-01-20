given_list = [1,2,3,2,3,4,5,4,5]

multi_occ = {}
flist = []

for i in given_list:
    if i not in multi_occ:
        multi_occ[i] = 1
    else:
        flist.append(i)
        multi_occ[i] += 1


print(multi_occ)
print(flist)
