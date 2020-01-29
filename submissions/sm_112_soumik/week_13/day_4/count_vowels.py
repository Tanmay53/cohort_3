check = input("Enter a message seperated my spaces ! :")
vowels = ['a', "e", "i", "o", "u"]
count = 0
for letter in check:
    if letter in vowels:
        count += 1
print(count)
