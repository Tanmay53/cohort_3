letters = ["Masai", "School"]
usr_str = "ilovemyindia"
str_dict = {}

for i in letters:
    for j in i:
        if j not in str_dict:
            str_dict[j] = 1
        else:
            str_dict[j] += 1
   
print(str_dict)