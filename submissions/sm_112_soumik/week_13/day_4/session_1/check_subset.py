input1 = list(input("Enter a string"))
input2 = input("Enter second string")

count = 0

for letter in input2:
    if letter in input1:
        count += 1
        idx = input1.index(letter)
        input1[idx] = None
if count == len(input2):
    print("A is Subset of B")
else:
    print("A is not a Subset of B")
