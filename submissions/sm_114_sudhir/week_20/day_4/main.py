# from pkgs import area
# from pkgs import operations

from pkgs.area import *
from pkgs.operations import *
from func_time import *

# Decorator Example
# def print_hello():
#     print("Hello")

# p = decorator(print_hello)
# p()

# Menu Listing
# 1. Find factorial
# 2. Find cube of any numbers
# 3. Find area of square
# 4. Find the perimeter of square

while True:
    options = int(input("Enter Your Choice:\n 1. Find factorial\n 2. Find cube of any numbers\n 3. Find area of square\n 4. Find the perimeter of square\n Choice should be a number:- "))

    if options == 1:
        n = int(input("Enter the number: "))
        d = decorator(factorial)
        print("Factorial is:- " + str(d(n)))
    elif options == 2:
        n = int(input("Enter the number: "))
        print("Cube is:- "+ str(find_cube(n)))
    elif options == 3:
        side = int(input("Enter the value of side: "))
        print("Area is:- "+ str(square_area(side)))
    elif options == 4:
        side = int(input("Enter the value of side: "))
        print("Perimeter is:- " + str(square_perimeter(side)))
    else:
        print("Wrong Choice")
        



# from operations import *
# from area import *
# print(operations.factorial(5))
# print(operations.find_cube(3))
# print(area.square_area(4))
# print(area.square_perimeter(4))