def is_vowel(char):
    if char == "a" or char == "e" or char == 'i' or char == 'o' or char == 'u':
        return True
    else:
        return False

string = input("Enter a string: ")

count = 0

for char in string:
    if !is_vowel(char):
        count += 1

print(count)