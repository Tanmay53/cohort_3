setA = {1,2,3,4}
setB = {1,2,3,7}

intersection_set = set()

for i in setA:
    for j in setB:
        if i == j:
          intersection_set.add(i)  

print(intersection_set)