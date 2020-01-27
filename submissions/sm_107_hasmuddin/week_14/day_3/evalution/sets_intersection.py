a = set(map(str, input("a: ").split()))
b = set(map(str, input("b: ").split()))
c = set(map(str, input("c: ").split()))

intersection = set()
for val in a:
    if val in b and val in c:
        intersection.add(val)

print(intersection)