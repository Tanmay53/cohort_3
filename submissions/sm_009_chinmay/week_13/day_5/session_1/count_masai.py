# Count the number of times the word masai appears in the file
fl = open('data/random_ids.txt')

count = 0

for line in fl:
    if 'masai' in line:
        count += 1
        
print(count)

fl.close()