"""
Read the data from the file, write functions to accomplish the below tasks
1.Count the number for students from India and Pakistan
2.Total no of students who scored below 50 marks
3.Total no of students who scored above 50 marks
4.No of students who scored exactly 50 marks (Country wise)
5.Create a file called marks_india.txt and marks_pakistan.txt based on the country
of the students (They should not have the country name in the file)
Create a file called marks_100.txt with all the ids of the students
who scored 100 marks (It should not have the marks column)
"""
file = open("marks_rand_2000.csv")
mark_india = open("marks_india.txt","w+")
mark_pak = open("marks_pakistan.txt", "w+")
mark_hundred = open("marks_100.txt", "w+")



indian = 0
pakistani = 0
more_than_fifty = 0
less_than_fifty = 0
equal_to_fify_ind = 0
equal_to_fify_pak = 0

for line in file:
    for i in range(len(line.split())):
        eachline = line.split()
        if i==1:
            if eachline[i]== "India":
                mark_india.write(eachline[0]+"\n")
                indian +=1
            elif eachline[i] == "Pakistan":
                mark_pak.write(eachline[0]+"\n")
                pakistani +=1
        elif i==0:
            if int(eachline[0]) == 100:
                mark_hundred.write(eachline[2]+"\n")
            if int(eachline[0]) > 50:
                more_than_fifty += 1
            if int(eachline[i]) < 50:
                less_than_fifty += 1
            if int(eachline[i]) ==50:
                if eachline[i+1]=="India":
                    equal_to_fify_ind += 1
                elif eachline[i+1]=="Pakistan":
                    equal_to_fify_pak += 1


print(indian)
print(pakistani)
print(more_than_fifty)
print(less_than_fifty)
print(equal_to_fify_pak)
print(equal_to_fify_ind)


#closing all files

mark_hundred.close()
mark_pak.close()
mark_india.close()
file.close()