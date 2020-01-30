string1 = input("Enter first string")
string2 = input("Enter second string")

set1 = {""}
set2 = {""}

strng = ""

for letter in string1:
    set1.add(letter)

for letter in string2:
    set2.add(letter)

for key1 in set1:
    if key1 in set2:
        strng += key1


print(strng)
