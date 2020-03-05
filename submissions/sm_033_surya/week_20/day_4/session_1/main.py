from pkgs.area import *
from pkgs.operations import *


def selectfunction(a):
    if a == 1:
        print("enter inputvalue")
        x = input()
        area(x)
    elif a == 2:
        print("enter inputvalue")
        x = input()
        perimeter(x)
    elif a == 3:
        print("enter inputvalue")
        x = input()
        factorial(x)
    elif a == 4:
        print("enter inputvalue")
        x = input()
        cube(x)
    else:
        print("invalid input")


print("enter value 1 for area ,2 for perimeter ,3 for factorial ,4 for cube")
a = input()
selectfunction(a)

# perimeter(a)
# area(a)
# factorial(a)
# cube(a)
