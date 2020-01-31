input_value = int(input())

def Pyramid(input_value):
    output_string = ""
    for i in range(0, input_value):

        for j in range(0, 2*input_value+1):

            if j == input_value-i:
                output_string = output_string+"0"
                
            elif j == input_value+i:
                output_string = output_string+"0"

            elif j < input_value+i and j > input_value-i:
                
                if input_value % 2 == 0:
                    if j % 2 == 0 and i % 2 == 0:
                        output_string = output_string+"0"
                    elif j % 2 == 1 and i % 2 == 1:
                        output_string = output_string+"0"
                    else:
                        output_string = output_string + "."
                        
                else:
                    if j % 2 == 0 and i % 2 == 1:
                        output_string = output_string+"0"
                    elif j % 2 == 1 and i % 2 == 0:
                        output_string = output_string+"0"
                    else:
                        output_string = output_string + "."
                        
            else:
                output_string = output_string+"."

        print(output_string)
        output_string = ""


def Inverse_Pyramid(input_value, startIndex):
    output_string = ""
    i = startIndex
    while i >= 0:
        for j in range(0, 2*input_value+1):
            
            if j == input_value-i:
                output_string = output_string+"0"
            elif j == input_value+i:
                output_string = output_string+"0"
                
            elif j < input_value+i and j > input_value-i:
                
                if input_value % 2 == 0:
                    if j % 2 == 0 and i % 2 == 0:
                        output_string = output_string+"0"
                    elif j % 2 == 1 and i % 2 == 1:
                        output_string = output_string+"0"
                    else:
                        output_string = output_string + "."
                else:
                    if j % 2 == 0 and i % 2 == 1:
                        output_string = output_string+"0"
                    elif j % 2 == 1 and i % 2 == 0:
                        output_string = output_string+"0"
                    else:
                        output_string = output_string + "."
                        
            else:
                output_string = output_string+"."
        i -= 1
        print(output_string)
        output_string = ""


def Rhombus(input_value):
    Pyramid(input_value)
    Inverse_Pyramid(input_value, input_value-2)


Pyramid(input_value)
print("                          ")  #outputseparation
Inverse_Pyramid(input_value, input_value-1)
print("                          ")  #outputseparation
Rhombus(input_value)
