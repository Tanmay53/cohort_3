# getting word from user
string = input('Enter a word: ')

lower_vowels = {
    'a': 1,
    'e': 1,
    'i': 1,
    'o': 1,
    'u': 1
}
upper_vowels = {
    'A': 1,
    'E': 1,
    'I': 1,
    'O': 1,
    'U': 1
}
lower_vowels_count = 0
upper_vowels_count = 0

# checking whether characters in string is lower/upper vowel or consonant
for char in string:
    if char in lower_vowels:
        lower_vowels_count += 1
    elif char in upper_vowels:
        upper_vowels_count += 1

# printing lower/upper vowel count
print(f'lower: {lower_vowels_count}')
print(f'UPPER: {upper_vowels_count}')