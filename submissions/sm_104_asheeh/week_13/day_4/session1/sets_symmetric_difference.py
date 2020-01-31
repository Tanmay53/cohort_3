set1 = {3,4,5,6,77,88,35}
set2 = {4,2,22,443,32,5}
union = set()
intersection = set()
symmetricDifference = set()

union.update(set1, set2)

for ele in set1:
    if ele in set2:
        intersection.add(ele)

symmetricDifference = union - intersection
print(symmetricDifference)