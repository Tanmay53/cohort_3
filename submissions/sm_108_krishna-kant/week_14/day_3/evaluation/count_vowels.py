lower_vowel = ('a','e','i','o','u')
upper_vowel = ('A','E','I','O','U')

string = input("Enter a String... : ")

# @param : ("string")
def count_vowels(string):
    lower_vowel_count = 0
    upper_vowel_count = 0
    for char in string:
        if char in lower_vowel:
            lower_vowel_count += 1
        elif char in upper_vowel:
            upper_vowel_count += 1
    print(f"lower - {lower_vowel_count}")
    print(f"UPPER - {upper_vowel_count}")
    
count_vowels(string)