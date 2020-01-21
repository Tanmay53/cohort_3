file = open('marks_rand_2000.csv', 'r')
india_file = open('marks_india.txt', 'w+')
pak_file = open('marks_pakistan.txt', 'w+')

for line in file.readlines():
    temp = line.lower().split()
    
    if temp[1] == 'india':
        india_file.write(' '.join(temp[::2]) + '\n')
    else:
        pak_file.write(' '.join(temp[::2]) + '\n')

india_file.close()
pak_file.close()