from pkgs.operations import fact as factorial,cube
from pkgs.area import * 
print('1:fact,2:cube,3:perimeter,4:area')
oper = int(input('enter operation no:'))
num = int(input('enter input:'))

if oper == 1:
    print('fact of %s is '%(num),factorial(num))
elif oper == 2:
    print('cube of %s is '%(num),cube(num))
elif oper == 3:
    print('perimeter of square with side %s is '%(num),perimeter(num))
elif oper == 4:
    print('area of square with side %s is '%(num),area(num))
else: print('Invalid operation')








