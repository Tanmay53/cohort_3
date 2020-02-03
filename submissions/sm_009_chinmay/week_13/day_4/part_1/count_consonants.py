# Print the count of all the consonants in the given list of strings

vowels = ['a','e','i','o','u']
list_of_strings = ['a','b','c','d','e','f','g','h','i', 'o', 'u'] #consonants count should be 6
cnt = len(list_of_strings)

for i in range(len(list_of_strings)):
    for j in range(len(vowels)):
        if list_of_strings[i] == vowels[j]:
            cnt = cnt - 1

print(cnt)