# from operations import *
# from area import *
from pkgs.operations import *
from pkgs.area import *

# print(operations.factorial(4))
# print(cube(4))
# print(area(5))
# print(perimeter(5))

# Menu Listing
# 1.factorial
# 2.cube
# 3.area
# 4.perimeter

while True:
    user_input =  int(input("Enter the desired operation \n 1.factorial \n 2.cube \n 3.area \n 4.perimeter \n"))
    if user_input is 1:
        number = int(input("Enter the number: "))
        print("Factorial is: ", factorial(number))
    elif user_input is 2:
        number = int(input("Enter the number: "))
        print("Cube is: ", cube(number))
    elif user_input is 3:
        number = int(input("Enter the number: "))
        print("Area of square is: ", area_square(number))
    elif user_input is 4:
        number = int(input("Enter the number: "))
        print("Perimeter of square is: ", perimeter(number))
    else:
        print("This choice is not available")
