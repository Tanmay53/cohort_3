from pkgs.operations import *
from pkgs.area import *


print(" 1. Cube of a Number \n 2. Factorial of a number  \n 3. Area of Sqare  \n 4. Perimeter of Square ")

def get_input():
    val = int(input("Enter 1,2,3,4 according to your need from above categories :"))
    return val


def get_out():
    val = get_input()
    if val is 1:
        n = float(input("Enter number : "))
        print("The cube of %f  is : %f"%(n,cube(n)))
    elif val is 2:
        n = int(input("Enter number : "))
        print("The factorial of %d is : %d"%(n,factorial(n)))
    elif val is 3:
        n = float(input("Enter length of side : "))
        print("The area of sqare of side %f is : %f" %(n,area_square(n)))
    elif val is 4:
        n = float(input("Enter length of side : "))
        print("The perimeter of sqare of side %f is : %f"%(n,perimeter_sqare(n)))
    else:
        print("Not a valid Input")

get_out()
