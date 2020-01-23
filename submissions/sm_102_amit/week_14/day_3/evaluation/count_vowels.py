# Count vowel
string = input("Enter your string: ")
lower_vowel = ["a", "e", "i", "o", "u"]
upper_vowel = ["A", "E", "I", "O", "U"]
l_count = 0
u_count = 0
for x in string:
    if x in lower_vowel:
        l_count += 1
    elif x in upper_vowel:
        u_count += 1
print("Input: ", string)
print("Lower Vowel: ", l_count)
print("Upper Vowel: ", u_count)

# Sample Case:
'''
Enter your string: Amit Kumar
Input:  Amit Kumar
Lower Vowel:  3
Upper Vowel:  1
'''
