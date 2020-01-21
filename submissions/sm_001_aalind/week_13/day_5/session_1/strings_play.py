def camel_case(string):
    return not string.islower() and not string.isupper() and '_' not in string

def snake_case(string):
    pass

def hyphen_case(string):
    pass

string = input('Enter a word: ')

print(camel_case(string))