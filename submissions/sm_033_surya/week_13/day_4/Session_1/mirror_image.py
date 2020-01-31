input_string = "Ay--zB"
capital_alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
small_alphabets = "abcdefghijklmnopqrstuvwxyz"
output_string = ""
for i in range(0,len(input_string)):

    if input_string[i] in capital_alphabets:

        capital_charindex = capital_alphabets.index(input_string[i])
        capital_charindex = 25 - capital_charindex 
        output_string = output_string + capital_alphabets[capital_charindex]
        
    elif input_string[i] in small_alphabets:
        
        small_charindex = small_alphabets.index(input_string[i])
        small_charindex = 25 - small_charindex
        output_string = output_string + small_alphabets[small_charindex]

    else:
        # output_string =output_string+input_string[i]
        continue
        
print(output_string)