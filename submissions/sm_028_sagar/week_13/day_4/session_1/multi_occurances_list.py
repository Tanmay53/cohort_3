name_list = ['sagar','sagar','pravin','amar','amar','kumar']

no_of_occurences = {}

for item in name_list:
    if(item in no_of_occurences):
        no_of_occurences[item] = no_of_occurences[item] + 1
    else:
        no_of_occurences[item] = 1


#printing names with more than one occurence
for key,value in no_of_occurences.items():
    if(value > 1):
        print(key)

# print(no_of_occurences)