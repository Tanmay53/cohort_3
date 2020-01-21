f1 = open('marks_rand_2000.csv')

indiaFile = open('marks_india.txt','w')
pakFile = open('marks_paki.txt','w')
marks_100 = open('marks_100.txt','w')

stu_india = 0
stu_pakistan = 0
below_50 = 0
above_50 = 0
exact_50 = 0

for line in f1:
    if 'India' in line:
        stu_india += 1
    elif 'Pakistan' in line:
        stu_pakistan += 1
    
    temp = (line.split())
    marks = int(temp[0])
    if (marks > 50):
        above_50 += 1
    elif (marks < 50):
        below_50 += 1
    elif (marks == 50):
        exact_50 += 1
    
    if (marks == 100):
        marks_100.write(temp[2]+'\n')

    if 'India' in line:
        indiaFile.write(temp[0]+' '+temp[2]+'\n')
    elif 'Pakistan' in line:
        pakFile.write(temp[0]+' '+temp[2]+'\n')
        
    
f1.close()

print('Total Students from india are ',stu_india)
print('Total Students from pakistan are ',stu_pakistan)
print('Students scored more than 50 ',above_50)
print('Students scored less than 50 ',below_50)
print('Students scored exactly 50 ',exact_50)


#creating file
# fl = open("demo.txt", "w")
# fl.write("Masai School")
# fl.close()

# fl = open("demo.txt", "a")
# fl.write("Masai School")
# fl.close()








