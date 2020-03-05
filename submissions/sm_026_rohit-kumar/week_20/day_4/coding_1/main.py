'''
from operations import cube, fact
from area import area, perimeter

print('cube of 5 : ', cube(5))
print('fact of 5 : ', fact(5))
print('area of square with side 5 : ', area(5))
print('perimeter of square with side 5 : ', perimeter(5))
'''

from pkgs import area
from pkgs import operations


print('1. For Cube')
print('2. For Factorial')
print('3. For Area')
print('4. For Perimeter')


try:
    ch = int(input('Enter choice (1-4) : '))
    if ch == 1:
        num = int(input('Enter number :'))
        print('cube : {}'.format(operations.cube(num)))
    elif ch == 2:
        num = int(input('Enter number :'))
        print('factorial : {}'.format(operations.fact(num)))
    elif ch == 3:
        num = int(input('Enter side :'))
        print('Area : {}'.format(area.area(num)))
    elif ch == 4:
        num = int(input('Enter side :'))
        print('Perimeter : {}'.format(area.perimeter(num)))
    else:
        print('Wrong choice !!!')
except Exception as ex:
    print('Error : ', ex)