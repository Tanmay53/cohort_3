from pkgs.operations import *
from pkgs.area import *

option = input(
    """
    1. Factorial
    2. Cube
    3. Perimeter
    4. Square
"""
)

if option == "1":
    num = int(input("Enter a number: "))
    print(factorial(num))
elif option == "2":
    num = int(input("Enter a number: "))
    print(cube(num))
elif option == "3":
    side = int(input("Enter side of square: "))
    print(square_perimeter(side))
elif option == "4":
    side = int(input("Enter side of square: "))
    print(area_square(side))
