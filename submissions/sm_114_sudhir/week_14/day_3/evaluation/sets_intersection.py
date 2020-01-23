set_a = {"a", "b", "c", "d", "e"}
set_b = {"a", "e", "f", "h", "k"}
set_c = {"a", "b", "c", "z", "m"}

ans_set = set()


for i in set_a:
    for j in set_b:
        for k in set_c:
            if i == j and j == k:
                ans_set.add(i)


print(ans_set)