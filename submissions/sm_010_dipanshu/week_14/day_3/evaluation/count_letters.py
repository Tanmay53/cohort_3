strings = ["Masai", "School"]

chars = {}

for string in strings:
    for char in string:
        if char not in chars:
            chars[char] = 1
        else:
            chars[char] += 1

for key, value in chars.items():
    print(key + " - " + str(value))
