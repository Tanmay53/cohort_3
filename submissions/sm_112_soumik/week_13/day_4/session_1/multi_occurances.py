string = input("Enter a string")

obj = {}

for letter in string:
    if letter in obj:
        obj[letter] += 1
    else:
        obj[letter] = 1

for key, value in obj.items():
    if value > 1:
        print(key)
