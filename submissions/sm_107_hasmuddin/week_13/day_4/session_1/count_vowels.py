vowels = "aeiou"

strings = str(input("check Vowel: "))

count = 0
for strs in strings:
    for vowel in vowels:
        if strs.lower() == vowel:
            count +=1

print(count)