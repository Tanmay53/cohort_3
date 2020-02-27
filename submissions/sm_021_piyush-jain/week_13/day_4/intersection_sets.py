students = {"Ajay", "Akshay", "Anusha", "Vetri", "Rahul", "Mahesh", "Pavan", "Haren","piyush"}
student = {"Ajay", "Akshay", "Anusha", "Vetri", "Rahul", "Mahesh", "Pavan", "Haren"}
array1=[]
array2=[]
for x in students:
    array1.append(x)
for x in student:
    array2.append(x)
print(student & students) 
print(array2) 
#Operator and method approach  