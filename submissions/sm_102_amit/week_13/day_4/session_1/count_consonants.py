# Print the count of all the consonants in the given list of strings
strList = ["apple", "banana", "cherry", "orange", "kiwi", "melon", "mango"]
vowel = ["a", "e", "i", "o", "u"]
count = 0
for string in strList:
    for x in string:
        if x in vowel:
            continue
        else:
            count += 1
    print(string, count)
    count = 0
