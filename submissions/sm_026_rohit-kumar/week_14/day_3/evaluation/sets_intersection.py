a = ["a", "b", "c", "d", "e"]
b = ["a", "e", "f", "h", "k"]
c = ["a", "b", "c", "z", "m"]


# set1 and set2 are two lists
def set_intersection(set1, set2):
        dict = {}
        lst = []
        for i in set1:
            dict[i] = True
        
        for i in set2:
            if i in dict:
                lst = lst + [i]
        
        return lst


combined = set_intersection(a, b)
print(set_intersection(combined, c))