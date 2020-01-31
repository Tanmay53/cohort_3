input_string = "Masai school-surya"
Capitsl_alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
Small_alphabets = "abcdefghijklmnopqrstuvwxyz"


def camelcase(input_string):
    i = 0
    output_string = ""

    while i < len(input_string):

        if input_string[i] in Capitsl_alphabets:

            temp = Capitsl_alphabets.index(input_string[i])
            output_string = output_string+Small_alphabets[temp]

        elif input_string[i] in [" ", "_", "-"]:

            temp2 = Small_alphabets.index(input_string[i+1])
            output_string = output_string + Capitsl_alphabets[temp2]
            i += 1

        else:
            output_string = output_string + input_string[i]
        i = i + 1
    print(output_string)


def stringplay(input_string, symbol):
    i = 0
    output_string = ""
    while i < len(input_string):

        if input_string[i] in Capitsl_alphabets:
            temp = Capitsl_alphabets.index(input_string[i])
            output_string = output_string+Small_alphabets[temp]

        elif input_string[i] in [" ", "_", "-"]:
            output_string = output_string + symbol
            
        else:
            output_string = output_string + input_string[i]
        i = i + 1
    print(output_string)


def snake_case(input_string):
    stringplay(input_string, "_")


def hypen_case(input_string):
    stringplay(input_string, "-")


camelcase(input_string)
snake_case(input_string)
hypen_case(input_string)
