vowels = {
    "a": True,
    "A": True,
    "e": True,
    "E": True,
    "i": True,
    "I": True,
    "o": True,
    "O": True,
    "u": True,
    "U": True,
}

words = ["dipanshu", "DIPANSHU", "DiPaNsHu", "gaurav", "GAURAV", "gAuRaV", "aalind", "AALIND", "aAlInD"]
result = []

for word in words:
    count = 0
    for char in word:
        if char in vowels:
            count += 1
    result.append(count)

print(result)
