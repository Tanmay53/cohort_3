input_str = "MASAI School"

lower = 0
UPPER = 0
vowel_lower = ["a", "e" , "i", "o", "u"]
vowel_upper = ['A', 'E', 'I', 'O', 'U']

for i in input_str:
    if i in vowel_lower:
        lower += 1
    if i in vowel_upper:
        UPPER += 1
print('lower - '+str(lower))
print('UPPER - '+ str(UPPER))