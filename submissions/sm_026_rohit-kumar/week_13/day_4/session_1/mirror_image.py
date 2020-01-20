def mirror(c):
    if c.islower():
        return chr(25 - (ord(c) - 97) + 97) 
    elif c.isupper():
        return chr(25 - (ord(c) - 65) + 65) 
    else:
        return c



def mirror_image(string):
    new_string = ''
    for c in string:
        new_string = new_string  + mirror(c)
    return new_string

string = input('Enter the string : ')
print(mirror_image(string))