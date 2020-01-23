inputString = input("Enter String: ")

cntVowelsLow = 0
cntVowelsUp = 0

for a in inputString:
    if a in 'aeiou':
        cntVowelsLow += 1
    elif a in 'AEIOU':
        cntVowelsUp += 1

print("lower -", cntVowelsLow)
print("UPPER -", cntVowelsUp)