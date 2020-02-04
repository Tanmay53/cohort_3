string1 = set(input("Enter first set !"))
string2 = set(input("Enter second set !"))


count = 0
for letter in string2:
    if letter in string1:
        count += 1
if count == len(string2):
    print("is super_set")
else:
    print("no super_set")
