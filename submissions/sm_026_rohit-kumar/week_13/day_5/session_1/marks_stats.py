def create_marks_files(lst):
    india_txt = open('marks_india.txt', 'w')
    for l in lst:
        if l[1] == 'India':
            india_txt.write('{} {}'.format(l[0], l[2]))
    india_txt.close()

    # pak file
    pak_txt = open('marks_pakistan.txt', 'w')
    for l in lst:
        if l[1] == 'Pakistan':
            pak_txt.write('{} {}'.format(l[0], l[2]))
    pak_txt.close()

def create_marks_100(lst):
    marks_100 = open('marks_100.txt', 'w')

    for l in lst:
        if int(l[0]) == 100:
            marks_100.write('{} {}'.format(l[1], l[2]))
    marks_100.close()

def exactly_50(lst):
    dict = {'India': 0, 'Pakistan':0}
    for stu in lst:
        if int(stu[0]) == 50:
            dict[stu[1]] = dict[stu[1]] + 1

    print('India : ', dict['India'])
    print('Pakistan : ', dict['Pakistan'])


def above_50(lst):
    count = 0
    for i in lst:
        if int(i[0]) > 50:
            count = count + 1

    print('Above 50 : ', count)


def below_50(lst):
    count = 0
    for i in lst:
        if int(i[0]) < 50:
            count = count + 1

    print('Below 50 : ', count)


def count_students(lst):
    count_india = 0
    count_pak   = 0

    for i in lst:
        if i[1] == 'India':
            count_india = count_india + 1
        if i[1] == 'Pakistan':
            count_pak = count_pak + 1

    print('Indian students : ', count_india)
    print('Pak students : ', count_pak)


f = open('marks_rand_2000.csv', 'r')

lst = []
for l in f:
    lst.append(l.split(' '))
f.close()    

count_students(lst)
below_50(lst)
above_50(lst)
exactly_50(lst)
create_marks_files(lst)
create_marks_100(lst)