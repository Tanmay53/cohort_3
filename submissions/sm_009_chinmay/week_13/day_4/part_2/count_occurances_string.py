# Given a string print the number of times each character appears in the string (HINT: Use dictionaries)
string = 'sstrinsg'
dict_string = {}

for i in range(len(string)):
    if string[i] not in dict_string:
        # print('not present')        
        dict_string[string[i]] = 1
    else:
        dict_string[string[i]] = dict_string.get(string[i])+1
print(dict_string)