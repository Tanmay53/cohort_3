inp = input().split()   #user input

def count_vowels(inp):
    total_lower = 0
    total_upper = 0

    for string in inp:
        total_lower += lower_case(string)
        total_upper += upper_case(string)

    print('lower - '+str(total_lower))
    print('upper - '+str(total_upper))

def lower_case(string):
    count = 0
    for char in string:
        if char in 'aeiou': count+=1
    return count

def upper_case(string):
    count = 0
    for char in string:
        if char in 'AEIOU': count += 1
    return count

count_vowels(inp)

# sample test case
# input = 'MASAI school'
# output
# lower - 2
# upper - 3
