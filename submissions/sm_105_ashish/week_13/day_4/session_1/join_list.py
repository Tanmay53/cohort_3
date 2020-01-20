input = "rahul is soumik"
str = ''
for i in range(len(input)):
    if input[i] != " ":
        str += input[i]
print(str)