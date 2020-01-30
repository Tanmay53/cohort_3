input1 = input("Enter a word")
input2 = input("Enter second word")

my_set = {""}
for letter in input1:
    my_set.add(letter)

for letter in input2:
    my_set.add(letter)
print("union is", "".join(my_set))
