# Set intersection
input_1 = input("Enter first set: ")
input_2 = input("Enter second set: ")
input_3 = input("Enter third set: ")

set_1 = set(input_1.split())
set_2 = set(input_2.split())
set_3 = set(input_3.split())

result = set()
for x in set_1:
    if x in set_2 and x in set_3:
        result.add(x)

print("# Set 1: ", set_1)
print("# Set 2: ", set_2)
print("# Set 3: ", set_3)
print("# ", result)

# Sample Case:
'''
Enter first set: a b c d e
Enter second set: a e f h k
Enter third set: a b c z m
# Set 1:  {'b', 'a', 'd', 'e', 'c'}
# Set 2:  {'f', 'a', 'h', 'k', 'e'}
# Set 3:  {'m', 'b', 'z', 'a', 'c'}
#  {'a'}
'''
