a = {"a", "b", "c", "d", "e"}
b = {"a", "e", "f", "h", "k"}
c = {"a", "b", "c", "z", "m"}
common=set()
for ele in a:
    if ele in b and ele in c:
        common.add(ele)
print (common)