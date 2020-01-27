str_list  = ['Masai', "School"]

count_letter = dict()

for i in str_list:
    for j in i:
        if j not in count_letter:
            count_letter[j] = 1
        else:
            count_letter[j] += 1
for i in count_letter:
    print(i+' - '+str(count_letter[i]))