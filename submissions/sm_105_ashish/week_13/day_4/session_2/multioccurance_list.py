list = ["apple","ball","cat","dog","elephant","frog","apple","ball","car","frog"]
occurance_morethan_1 = {}
multi_list =[]
for i in list:
    if i not in occurance_morethan_1: 
        occurance_morethan_1[i] = 1
    elif i in occurance_morethan_1:
        multi_list.append(i)
        occurance_morethan_1[i] += 1
print(multi_list)