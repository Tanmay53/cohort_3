# Print the count of all the vowels in the given list of strings
strList = ["apple", "banana", "cherry"]
vowel = ["a", "e", "i", "o", "u"]
count = 0
for string in strList:
    for x in string:
        if x in vowel:
            count += 1
    print(string, count)
    count = 0
