def find_index(char, string):
    for index, val in enumerate(string):
        if val == char:
            return index

    return None
    
email_string = input('Enter a valid email: ')
domain_index = find_index('@', email_string)

print(email_string[domain_index+1:])
