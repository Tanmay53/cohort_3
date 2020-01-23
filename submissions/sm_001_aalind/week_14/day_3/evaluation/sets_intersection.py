# splits string by given character and returns a set
def split_string(split_by, given_string):
    new_set = set()
    temp_str = ''

    for char in given_string:
        if char != ',':
            temp_str += char
        else:
            new_set.add(temp_str)
            temp_str = ''
    
    new_set.add(temp_str)

    return new_set

# finds common between two sets
def find_common(set1, set2):
    new_set = set()

    for val in set1:
        if val in set2:
            new_set.add(val)

    return new_set

set1 = input('Enter comma(,) separated elements without quotes(\') for set1: ')
set2 = input('Enter comma(,) separated elements without quotes(\') for set2: ')
set3 = input('Enter comma(,) separated elements without quotes(\') for set3: ')

set1 = split_string(',', set1)
set2 = split_string(',', set2)
set3 = split_string(',', set3)

sets_common = find_common(set1, set2)
sets_common = find_common(sets_common, set3)

print(sets_common)