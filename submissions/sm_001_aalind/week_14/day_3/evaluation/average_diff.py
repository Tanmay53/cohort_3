# splits string by given character
def split_string(split_by, given_string):
    new_list = []
    temp_str = ''

    for char in given_string:
        if char != ',':
            temp_str += char
        else:
            new_list.append(temp_str)
            temp_str = ''
    
    new_list.append(temp_str)

    return new_list

# converts each list element number to float
def map_to_float(given_list):
    for i in range(len(given_list)):
        given_list[i] = float(given_list[i])

    return given_list

given_list = input('Enter comma(,) separated numbers: ')
given_list = split_string(',', given_list)
given_list = map_to_float(given_list)

odd_index_count = 0
even_index_count = 0

for i in range(len(given_list)):
    if i % 2 == 0:
        even_index_count += given_list[i]
    else:
        odd_index_count += given_list[i]

print(even_index_count - odd_index_count)