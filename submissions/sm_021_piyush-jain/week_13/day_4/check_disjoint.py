students = {"Ajay", "Akshay", "Anusha", "Vetri", "Rahul", "Mahesh", "Pavan", "Haren"}
student = {"Piyush"}
array1=[]
array2=[]
for x in students:
    array1.append(x)
for x in student:
    array2.append(x)
x=0
while x < len(array1):
    if(array1[x] in array2):
        print("Not a disjoint")
        break
    else:
        x=x+1
        continue        
print(students & student)    