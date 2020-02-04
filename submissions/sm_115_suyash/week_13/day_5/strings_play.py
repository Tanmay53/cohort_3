print("Enter your string")
my_str = input()

# make function for print in differnet cases
def all_cases(def_str):
    camel_case(def_str)
    cabab_case(def_str)
    snake_case(def_str)

# Function for cabab case
def cabab_case(def_str):
    case = "-"
    other_case(def_str,case)

# Function for snake case
def snake_case(def_str):
    case = "_"
    other_case(def_str,case)

# Function for camel case
def camel_case(def_str):
    case_str = ""
    temp_str = ""
    char = 0
    while char < len(def_str):
        if def_str[char] == " ":
            temp_str = def_str[char+1].upper()
            case_str += temp_str
            char += 2
        else:
            case_str += def_str[char].lower()
            char += 1
    print(case_str)

# Function for defaual case for cabab and snake
def other_case(def_str,case):
    case_str = ""
    temp_str = ""
    char = 0
    while char < len(def_str):
        if def_str[char] == " ":
            case_str += case
            char += 1
        else:
            case_str += def_str[char].lower()
            char += 1
    print(case_str)

all_cases(my_str)