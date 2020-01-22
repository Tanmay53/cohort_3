school_name = "Masai School"
lower_case = 0
upper_case = 0
for i in school_name:
    if i == 'a':
        lower_case += 1
    elif i == 'e':
        lower_case += 1
    elif i == 'i':
        lower_case += 1
    elif i == 'o':
        lower_case += 1
    elif i == 'u':
        lower_case += 1
    elif i == 'A':
        upper_case += 1
    elif i == 'E':
        upper_case += 1
    elif i == 'I':
        upper_case += 1
    elif i == 'O':
        upper_case += 1
    elif i == 'U':
        upper_case += 1
print("lower- " + str(lower_case) + "\n" + "upper- " + str(upper_case))