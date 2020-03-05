from pkgs.area import *
from pkgs.operations import *

# operations

print("Select Function to execute Enter Desired Number")
print("1. Factorial")
print("2. Cube")
print("3. Permiter of Square")
print("4. Area of Square")
choice = int(input())
print("Enter Value to Perform Operation")
value = int(input())

if choice is 1:
    print(f"Factorial of {value} is {factorial(value)}")
elif choice is 2:
    print(f"Cube of {value} is {cube(value)}")
elif choice is 3:
    print(f"Perimeter of Square with side {value} is {perimeter_square(value)}")
elif choice is 4:
    print(f"Area of Square with side {value} is {area_square(value)}")
