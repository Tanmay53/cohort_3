a = {"a", "b", "c", "d", "e"}
b = {"a", "e", "f", "h", "k"}
c = {"a", "b", "c", "z", "m"}
common = set()

for i in a:
    for j in b:
        if i == j:
            for k in c:
                if i == k:
                    common.add(i)
print(common)



