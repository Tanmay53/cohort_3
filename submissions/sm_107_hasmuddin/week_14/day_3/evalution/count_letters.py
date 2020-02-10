str_arr = ["Masai", "School"]
obj = {}
for item in str_arr:
    for ob in item:
        if ob is " ":
            continue
        elif ob in obj:
            obj[ob] += 1
        else:
            obj[ob] = 1


for key in obj:
    print(f'{key} - {obj[key]}')
