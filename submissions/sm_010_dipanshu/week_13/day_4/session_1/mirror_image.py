# string = "DiPaNsHuSaBhArWaL"
string = "WrKzMhSfHzYsZiDzO"
lower = "abcdefghijklmnopqrstuvwxyz"
upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
result = ""

for char in string:
    found = False
    for i in range(len(lower)):
        if lower[i] == char:
            found = True
            result += lower[len(upper) - i - 1]

    if not found:
        for j in range(len(upper)):
            if upper[j] == char:
                found = True
                result += upper[len(upper) - j - 1]

print(result)
