check = input("Enter a message seperated my spaces ! :").split()
arr = []
# splitting input and joining without spaces
strg = ''
for letter in check:
    arr.append(letter)

strg = "".join(arr)

vowels = ['a', "e", "i", "o", "u"]
count = 0
# counting the number of consonants
for letter in strg:
    if letter in vowels:
        pass
    else:
        count += 1
print(count)
