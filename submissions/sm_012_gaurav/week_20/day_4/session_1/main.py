from pkgs.operations import *
from pkgs.area import *

print('1. Factorial\n2. Cube\n3. Area of Square\n4. Perimeter of Square')
choice = int(input('Select Option: '))

if choice == 1:
    n = int(input('Enter Number: '))
    print(factorial(n))
elif choice == 2:
    n = int(input('Enter Number: '))
    print(cube(n))
elif choice == 3:
    n = int(input('Enter Side of Square: '))
    print(areaSquare(n))
elif choice == 4:
    n = int(input('Enter Side of Square: '))
    print(perimeterSquare(n))
else:
    print('Wrong Option Selected')