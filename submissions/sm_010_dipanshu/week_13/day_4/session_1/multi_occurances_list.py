string = "dipanshusabharwal"

occurances = {}

for char in string:
    if char not in occurances:
        occurances[char] = 1

    else:
        occurances[char] += 1

multi_occurances = []

for key, value in occurances.items():
    if (value > 1):
        multi_occurances.append(key)

print(multi_occurances)
