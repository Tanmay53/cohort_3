str = "masai school transformation in education"

def camel_case(input_str):
    camel_str = []
    space_pos = []
    for i in range(len(input_str)):
        if input_str[i] != ' ':
            camel_str.append(input_str[i])
        elif input_str[i] == ' ':
            space_pos.append(i)
    l = 0        
    for j in space_pos:
        camel_str[j+l] = camel_str[j+l].upper()
        l = l-1
    return ''.join(camel_str)

print(camel_case(str))

def snake_case(input_str):
    snake_str = []
    for i in range(len(input_str)):
        if input_str[i] != ' ':
            snake_str.append(input_str[i])
        elif input_str[i] == ' ':
            snake_str.append("_")
    return ''.join(snake_str)

print(snake_case(str))

def hypen_case(input_str):
    hypen_case = []
    for i in range(len(input_str)):
        if input_str[i] != ' ':
            hypen_case.append(input_str[i])
        elif input_str[i] == ' ':
            hypen_case.append("-")
    return ''.join(hypen_case)

print(hypen_case(str))

