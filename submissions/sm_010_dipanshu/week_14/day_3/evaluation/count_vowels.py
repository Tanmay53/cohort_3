print("Enter the string")
string = input()

# string = "axeyiz123@$ABECIDOFUGA"  # hard code value

lower_case_vowels = {
    "a": True,
    "e": True,
    "i": True,
    "o": True,
    "u": True
}

upper_case_vowels = {
    "A": True,
    "E": True,
    "I": True,
    "O": True,
    "U": True
}

lower_vowels_count = 0
upper_vowels_count = 0

for char in string:
    if (lower_case_vowels.get(char)):
        lower_vowels_count += 1
    elif (upper_case_vowels.get(char)):
        upper_vowels_count += 1

print("lower - ", lower_vowels_count)
print("UPPER - ", upper_vowels_count)
