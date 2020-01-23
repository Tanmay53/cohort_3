given_str = "MASAI School"
lvowels = ["a", "e", "i", "o", "u"]
uvowels = ["A", "E", "I", "O", "U"]

count_l = 0
count_u = 0
for i in range(0, len(given_str)):
    if given_str[i] in lvowels:
        count_l += 1
    if given_str[i] in uvowels:
        count_u += 1

print(count_l, count_u)
