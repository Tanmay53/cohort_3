file = open('marks_rand_2000.csv', 'r')

def count_india_pak(my_file):
    india_count = 0
    pak_count = 0

    for line in my_file.readlines():
        temp = line.lower().split()

        if temp[1] == 'india':
            india_count += 1
        else:
            pak_count += 1

    print(india_count, pak_count)

def students_below_50(my_file):
    count = 0

    for line in my_file.readlines():
        temp = line.split()
        
        if float(temp[0]) < 50:
            count += 1

    print(count)

def students_above_50(my_file):
    count = 0

    for line in my_file.readlines():
        temp = line.split()
        
        if float(temp[0]) > 50:
            count += 1

    print(count)

def students_equal_to_50(my_file):
    india_count = 0
    pak_count = 0

    for line in my_file.readlines():
        temp = line.split()
        
        if float(temp[0]) == 50:
            if temp[1].lower() == 'india':
                india_count += 1
            else:
                pak_count += 1

    print(f'India: {india_count}, Pakistan: {pak_count}')

students_equal_to_50(file)