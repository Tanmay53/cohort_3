str = "masaischoolwelcomesyou"
count_occurance = {}

for i in str:
    if i not in count_occurance:
        count_occurance[i] = 1
    elif i in count_occurance:
        count_occurance[i] += 1
print(count_occurance)