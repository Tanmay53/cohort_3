a = {'a', 'b', 'c', 'd', 'e'}
b = {'a', 'e', 'f', 'h',' k'}
c = {'a', 'b', 'c' ,'z', 'm'}

intersection_set = set()

for i in a:
    if i in b and i in c:
        intersection_set.add(i)
print(intersection_set)