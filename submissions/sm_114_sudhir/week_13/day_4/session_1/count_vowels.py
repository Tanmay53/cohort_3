given_str = list(input().split(' '))

vowels = ["a","e","i","o","u"]
print(given_str)
count = 0
for i in range(len(given_str)):
    for it in range(len(given_str[i])):
        if given_str[i][it] == "a" or given_str[i][it] == "e" or given_str[i][it] == "i" or given_str[i][it] == "o" or given_str[i][it] == "u":
            count += 1

print(count)