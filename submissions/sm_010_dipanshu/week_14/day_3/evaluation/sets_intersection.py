a = {"a", "b", "c", "d", "e"}
b = {"a", "e", "f", "h", "k"}
c = {"a", "b", "c", "z", "m"}

d = set()  # intersection of sets a and b
e = set()  # intersection of sets d and e

for element in b:
    if (element in a):
        d.add(element)

for element in c:
    if (element in d):
        e.add(element)

print(e)
