students = {"Ajay", "Akshay", "Anusha", "Vetri", "Rahul", "Mahesh", "Pavan", "Haren","piyush"}
student = {"Ajay", "Akshay", "Anusha", "Vetri", "Rahul", "Mahesh", "Pavan", "Haren"}

array1=[]
array2=[]
for x in students:
    array1.append(x)
for x in student:
    array2.append(x)

for x in array1:
    if(x not in array2):
        array2.append(x)

print(array2,student|students)
#Both tend to give same output---Operator and append method