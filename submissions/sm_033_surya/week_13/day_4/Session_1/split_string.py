input_string = "a,b,c,d"
check_char = ","
output_string = []
temp = ""

for i in range(0, len(input_string)):
    if input_string[i] == check_char:
        output_string.append(temp)
        temp = ""
    else:
        temp = temp + input_string[i]
    if i == len(input_string)-1:
       output_string.append(temp)

print(output_string)
