f1=open("marks_rand_2000.csv","r")
f2=open("marks_india.txt","a")
f3=open("marks_pakistan.txt","a")
f4=open("marks_100.txt","a")
india=0
pakistan=0
below50=0
equal50=0
above50=0
for line in f1:
    details=line.split()

    if "India" in line:
        india+=1
        f2.write(details[0]+" "+details[2]+"\n")
    elif "Pakistan" in line:
        pakistan+=1
        f3.write(details[0]+" "+details[2]+"\n")

    marks=int(details[0])
    if marks<50:
        below50+=1
    elif marks==50:
        equal50+=1
    else:
        above50+=1
    
    if marks==100:
        f4.write(details[1]+"  "+details[2]+"\n")


print("Total students from India:",str(india))
print("Total students from Pakistan:",str(pakistan))
print("Students with below 50 marks:",below50)
print("Students with 50 marks:", equal50)
print("Students with marks above 50:", above50)
f1.close()
f2.close()
f3.close()
f4.close()