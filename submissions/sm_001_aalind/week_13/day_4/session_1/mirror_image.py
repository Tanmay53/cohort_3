def indexOf(char, string):
    for i in range(len(string)):
        if string[i] == char:
            return i

    return -1

string = input('Enter a word: ')

alphabets_lower = "abcdefghijklmnopqrstuvwxyz"
final_string = ""

for char in string:
    index = indexOf(char.lower(), alphabets_lower)
    mirror_img = alphabets_lower[25-index]

    if char.isupper():
        final_string += mirror_img.upper()
    else:
        final_string += mirror_img.lower()

print(final_string)