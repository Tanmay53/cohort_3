# Count the number for students from India and Pakistan
import csv

# For total student count
def total_student_count():
    with open('data/marks_rand_2000.csv') as csvfile:
        reader = csv.reader(csvfile)
        count = 0
        for row in reader:
            count += 1
        return count

print(total_student_count())


# For students marks below 50
def students_scored_below_50():
    with open('data/marks_rand_2000.csv') as csvfile:
        reader = csv.reader(csvfile, delimiter = ' ')
        count = 0
        for row in reader:
            if int(row[0]) < 50:
                count += 1
        return count

print(students_scored_below_50())


# For students marks above 50
def students_scored_above_50():
    with open('data/marks_rand_2000.csv') as csvfile:
        reader = csv.reader(csvfile, delimiter = ' ')
        count = 0
        for row in reader:
            if int(row[0]) > 50:
                count += 1
        return count

print(students_scored_above_50())



# For students scoring exact 50
def students_scored_50():
    with open('data/marks_rand_2000.csv') as csvfile:
        reader = csv.reader(csvfile, delimiter=' ')
        count_ind_students = 0
        count_pak_students = 0
        for row in reader:
            if int(row[0]) == 50:
                if row[1]=='Pakistan':
                    count_pak_students += 1
                else:
                    count_ind_students += 1
        return ('Ind students with score 50: ' + str(count_ind_students), 'Pak students with score 50: ' + str(count_pak_students))

print(students_scored_50())



# Create a file called marks_india.txt and marks_pakistan.txt based on the country of the students (They should not have the country name in the file)

def read_csv():
    india_marks = {}
    pakistan_marks = {}
    with open('data/marks_rand_2000.csv') as csvfile:
        reader = csv.reader(csvfile, delimiter=' ')
        
        for row in reader:
            if row[1] == 'India':
                if row[2] not in india_marks:
                    india_marks[row[2]] = row[0]
                else:
                    break

            else:
                if row[2] not in pakistan_marks:
                    pakistan_marks[row[2]] = row[0]
                else:
                    break

        return (india_marks, pakistan_marks)

india_marks_input = (read_csv())[0]
pakistan_marks_input = (read_csv())[1]

def write_csv_india():
    with open('data/marks_india.txt', 'w') as csvfile:
        writer = csv.writer(csvfile, delimiter=',', quotechar='"')
        writer.writerow(['Student ID', 'Marks'])

        for key, value in india_marks_input.items():
            writer.writerow([key, value])

def write_csv_pakistan():
    with open('data/marks_pakistan.txt', 'w') as csvfile:
        writer = csv.writer(csvfile, delimiter=',', quotechar='"')
        writer.writerow(['Student ID', 'Marks'])
        for key, value in pakistan_marks_input.items():
            writer.writerow([key, value])


write_csv_india()
write_csv_pakistan()



# Create a file called marks_100.txt with all the ids of the students who scored 100 marks (It should not have the marks column)

def students_scored_100():
    with open('data/marks_rand_2000.csv') as csvfile:
        reader = csv.reader(csvfile, delimiter=' ', quotechar='"')
        student_list = []
        for row in reader:
            if int(row[0]) == 100:
                student_list.append(row[2])
        return student_list


student_scoring_100 = (students_scored_100())

def csv_write_student_scoring_100():
    with open('data/marks_100.txt', 'w') as inputfile:
        writer = csv.writer(inputfile, delimiter=',', quotechar='"')
        writer.writerow(['StudentId'])
        for id in student_scoring_100:
            writer.writerow([id])

csv_write_student_scoring_100()