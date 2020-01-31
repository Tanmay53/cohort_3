print("Enter your string")
input_str = input()
upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
lower_case = "abcdefghijklmnopqrstuvwxyz"
mirror_str = ""

for char in input_str:
    flag = True
    for i in range(len(lower_case)):
        if lower_case[i] == char:
            flag = False
            mirror_str += lower_case[len(upper_case) - i - 1]
    if flag:
        for j in range(len(upper_case)):
            if upper_case[j] == char:
                flag = False
                mirror_str += upper_case[len(upper_case) - j - 1]

print(mirror_str)
