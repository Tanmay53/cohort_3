a = {"a", "b", "c", "d", "e"}
b = {"a", "e", "f", "h", "k"}
c = {"a", "b", "c", "z", "m"}


# set1 and set2 are two lists
def set_intersection(set1, set2, set3):
    common = []
    for e in set1:        
        if e in set2 and e in set3:
            common = common + [e]
    return common


print(set_intersection(a, b, c))
