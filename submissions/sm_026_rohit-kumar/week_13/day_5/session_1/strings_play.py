UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
LOWER = 'abcdefghijklmnopqrstuvwxyz'

upper_to_lower_dict = {}
lower_to_upper_dict = {}

def upper_to_lower():
    for i in range(26):
        upper_to_lower_dict[UPPER[i]] = LOWER[i]

def lower_to_upper():
    for i in range(26):
        lower_to_upper_dict[LOWER[i]] = UPPER[i]



def to_upper_corresponding(char):
    lower_to_upper()
    return lower_to_upper_dict[char]

def to_lower_case(string):
    upper_to_lower()
    new_string = ''
    for c in string:
        if c in upper_to_lower_dict:
            new_string = new_string + upper_to_lower_dict[c]
        else:
            new_string = new_string + c            
    return new_string    


def first_char_up(word):
    lower_to_upper()
    new_word =  lower_to_upper_dict[word[0]]
    new_word = new_word + word[1:]

    return new_word

def camel_case(string_list):
    new_string = ''
    for i, word in enumerate(string_list):
        if i == 0:
            new_string = new_string + word
        else:
            new_string = new_string + first_char_up(word)
    return new_string

def snake_case(string_list):
    return join(string_list, '_')

def hyphen_case(string_list):
    return join(string_list, '-')


def join(string_list, char):
    new_string = ''
    for i, s in enumerate(string_list):
        if i == 0:
            new_string = new_string + s
        else:
            new_string = new_string + char + s
    
    return new_string

def split(string):
    lst = []
    temp = ''
    for s in string:
        if s == ' ':
            lst.append(temp)
            temp = ''
        else:
            temp = temp + s
    
    lst.append(temp)
    return lst

string = input('Enter string : ')
string = to_lower_case(string)

words = split(string)
print('snake case : ', snake_case(words))
print('hyphen case : ', hyphen_case(words))
print('came case : ', camel_case(words))

