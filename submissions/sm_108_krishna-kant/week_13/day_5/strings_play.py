string = input()

def snake_case(string):
    string = string.split(" ")
    snake_case_string = ""
    for char in string:
        snake_case_string += char.lower()
        snake_case_string += "_"
    return snake_case_string[0:(len(snake_case_string)-1):]
    #return string.replace(" ","_").lower() // Simple Way


def kabab_case(string):
    string = string.split(" ")
    kabab_case_string = ""
    for char in string:
        kabab_case_string += char.lower()
        kabab_case_string += "-"
    return kabab_case_string[0:(len(kabab_case_string)-1):]

def camel_case(string):
    string = string.split(" ")
    camel_case_string = ""
    for char in range(len(string)):
        if char == 0:
            camel_case_string += string[char].lower()
        else:
            temp = ""
            x = string[char]
            for c in range(len(x)):
                if c == 0:
                    temp += x[c].upper()
                else:
                    temp += x[c].lower()
            camel_case_string += temp
    return camel_case_string

    print(camel_case_string)
        
        
print(snake_case(string))
print(kabab_case(string)) 
print(camel_case(string))