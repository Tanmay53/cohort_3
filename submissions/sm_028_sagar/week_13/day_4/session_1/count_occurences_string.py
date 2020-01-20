string = 'masaischool'

occr = {}      #occurences of each character

for char in string:
    isFound = False
    for key in occr:
        if(key == char):
            isFound = True
            occr[key] = occr[key]+1
            break
    # print(char,isFound)
    if(isFound == False):
        occr[char] = 1

print(occr)   