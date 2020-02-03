# Print the count of all the vowels in the given list of strings

vowels = ['a','e','i','o','u']
list_of_strings = ['a','b','c','d','e','f','g','h','i', 'o', 'u'] #vowel count should be 5
cnt = 0

for i in range(len(list_of_strings)):
    for j in range(len(vowels)):
        if(list_of_strings[i] == vowels[j]):
            cnt = cnt + 1

print(cnt)