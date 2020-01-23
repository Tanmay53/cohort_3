inp = input().split()   #user input

lower_case_vowels = 0
upper_case_vowels = 0

for i in inp:
    for char in i:
        if char in 'aeiou':
            lower_case_vowels += 1
        elif char in 'AEIOU':
            upper_case_vowels += 1

print('lower - '+str(lower_case_vowels))
print('upper - '+str(upper_case_vowels))

# sample test case
# input = 'MASAI school'
# output
# lower - 2
# upper - 3
