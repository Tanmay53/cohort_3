string = "dipanshusabharwal"

occurances = {}

for char in string:
    if char not in occurances:
        occurances[char] = 1
    else:
        occurances[char] += 1

for key, value in occurances.items():
    print(key, "occures", value, "time(s)")
