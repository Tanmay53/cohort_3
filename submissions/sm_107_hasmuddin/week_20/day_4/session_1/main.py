from pkgs.area import *
from pkgs.operations import *

print("SELECT ANY NUMBER TO EXECUTE FUNCTION")
print("1. Cube of Number")
print("2. Factorial of Number")
print("3. Area of Square")
print("4. Perimeter of Square")
print("TYPE ANY OTHER KEY TO EXIT")

while True:
    select = int(input("TYPE : "))
    if not select in (1, 2, 3, 4):
        break
    value = int(input("NUMBER : "))
    if select is 1:
        print(f"Cube of {value} is {cube(value)}")
    elif select is 2:
        print(f"Factorial of {value} is {factorial(value)}")
    elif select is 3:
        print(f"Area of Square having side of {value} is {area(value)}")
    elif select is 4:
        print(
            f"Perimeter of Square having side of {value} is {perimeter(value)}")
