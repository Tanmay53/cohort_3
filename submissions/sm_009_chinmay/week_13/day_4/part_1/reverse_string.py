# # Print the given string in reverse order (NOTE: You can't use inbuilt methods)

name = "Masai School!!"

result=''
i = len(name) - 1

while i >= 0:
    result = result + name[i]
    i = i - 1
print(result)