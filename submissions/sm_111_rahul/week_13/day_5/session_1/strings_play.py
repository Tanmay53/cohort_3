def make_cases(string):
    camel_case(string)
    snake_case(string)
    hyphen_case(string)

def camel_case(string):
    new_str = ""
    cap = ""
    i = 0
    while i < len(string):
        if string[i] == " ":
            cap = string[i+1].upper()
            new_str += cap
            i += 2
        else:
            new_str += string[i]
            i += 1
    print(new_str)

def snake_case(string):
    new_str = ""
    i = 0
    while i < len(string):
        if string[i] == " ":
            new_str += "_"
            i += 1
        else:
            new_str += string[i]
            i += 1
    print(new_str)

def hyphen_case(string):
    new_str = ""
    i = 0
    while i < len(string):
        if string[i] == " ":
            new_str += "-"
            i += 1
        else:
            new_str += string[i]
            i += 1
    print(new_str)

make_cases("this is my name")
