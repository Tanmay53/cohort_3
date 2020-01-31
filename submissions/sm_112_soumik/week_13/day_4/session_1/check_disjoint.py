input1 = input("Enter 1st string")
input2 = input("Enter 2nd string")

new_set = {""}

for letter in input1:
    new_set.add(letter)
for letter in input2:
    new_set.add(letter)

if len(input1) + len(input2) > len(new_set):
    print("not disjoint")
else:
    print("disjoint")
