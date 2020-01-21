marks_100 = open('marks_100.txt', 'w+')
file = open('marks_rand_2000.csv', 'r')

for line in file.readlines():
    temp = line.split()

    if float(temp[0]) == 100:
        marks_100.write(temp[2] + '\n')
        # print(temp[2])

marks_100.close()
file.close()