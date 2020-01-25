def get_even_row(width):
    return '|___|' + '___|' * (width - 1)

def get_odd_row(width):
    return '__|' + '___|' * (width - 1) + '__'

def print_wall(height, width):
    even_row = get_even_row(width)
    odd_row = get_odd_row(width)

    for i in range(height):
        if i % 2 == 0:
            print(even_row)
        else:
            print(odd_row)

width = int(input('Enter brick wall width : '))
height = int(input('Enter brick wall height : '))

print_wall(height, width)    