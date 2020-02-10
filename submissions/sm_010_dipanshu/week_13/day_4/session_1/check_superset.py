superset = [1, 2, 3, 4, 5]
# check_set = [1, 2, 3]
# check_set = [1]
check_set = [6]
# check_set = [1, 2, 3, 4, 5, 6]
# check_set = [1, 2, 3, 4, 5]

all_found = True

for num in check_set:
    if num not in superset:
        all_found = False
        break

if all_found:
    print("Superset found")
else:
    print("Superset not found")
