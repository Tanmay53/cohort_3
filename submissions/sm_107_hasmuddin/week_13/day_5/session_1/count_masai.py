'''
Count the number of times the word masai appears in the file
'''

file = open("random_ids.txt")
count = 0
mystr = []
for line in file:
     for search in line.split():
         ind = search.find("masai")
         if ind != -1:
            mystr.append(ind)

print(len(mystr))
file.close()