def middle_part_pyramid(i):
    return '0' + '.0' * i

def middle_part_inverse_pyramid(i):
    return '.0' * i + '.'



def pyramid(level):
    for i in range(level):
        print('.' * (level - i) + middle_part_pyramid(i) + '.' * (level - i))


""" def inverse_pyramid(level):
    for i in range(level, - 1, -1):
        print('.' * (level - i - 1) + middle_part_inverse_pyramid(i) + '.' * (level - i - 1))
"""

def inverse_pyramid(level):
    for i in range(level):
        print('.' * i + middle_part_inverse_pyramid(level - i) + '.' * i)


def rhombus(level):
    pyramid(level)
    for i in range(1, level):
        print('.' * i + middle_part_inverse_pyramid(level - i) + '.' * i)



level = int(input('How many levels ? : '))
print()
pyramid(level)

print()
inverse_pyramid(level)
print()
rhombus(4)    