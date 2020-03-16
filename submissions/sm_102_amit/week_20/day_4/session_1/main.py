from pkgs.operations import *
from pkgs.area import *
import func_time

if __name__ == "__main__":
    o = int(
        input("Select a option:\n 1. Factorial\n 2. Cube\n 3. Area\n 4. Perimeter\n"))
    x = input("Enter a number: ")

    if o == 1:
        print("Factorial:", factorial(int(x)))
    elif o == 2:
        print("Cube:", cube(int(x)))
    elif o == 3:
        print("Area:", area(int(x)))
    elif o == 4:
        print("Perimeter:", perimeter(int(x)))
