input_string = "Suryaaaa"
output_string = ""
i = 1

while i <= len(input_string):
    output_string = output_string + input_string[-i]
    i += 1
print(output_string)
