vowels = "aeiou"
strings = str(input("check consonant: "))

vowelCount = 0
totalLenOfStr = len(strings)
for strs in strings:
    for vowel in vowels:
        if strs.lower() == vowel:
            vowelCount +=1

remainConsonant = totalLenOfStr - vowelCount
print(remainConsonant)