def middle_part_pyramid(i):
    return '0' + '.0' * i

def middle_part_inverse_pyramid(i):
    return '.0' * i + '.'



def pyramid(level):
    for i in range(level):
        print('.' * (level - i) + middle_part_pyramid(i) + '.' * (level - i))

def inverse_pyramid(level,):
    for i in range(level, - 1, -1):
        print('.' * (level - i) + middle_part_inverse_pyramid(i) + '.' * (level - i))

def rhombus():
    pass


level = int(input('How many levels ? : '))
print('pyramid -')
pyramid(level)

print('inverse pyramid -')
inverse_pyramid(level)
    