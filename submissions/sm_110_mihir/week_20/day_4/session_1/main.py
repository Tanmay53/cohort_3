from pkgs.operation import *
from pkgs.area import *

# print(facto(5))
# print(cube(3))
# print(perimeter(4))
# print(area(4))

choise = 0
while(choise<=4):
    print("1:Factorial")
    print("2:Cube")
    print("3:perimeter of a square")
    print("4:Area of a square")
    print("5:Exit")

    choise=int(input("Menu option: "))
    if choise<=4:
        num = int(input("Enter a number:"))
    
    if choise == 1:
        print(facto(num))
    elif choise == 2:
        print(cube(num))
    elif choise == 3:
        print(perimeter(num))
    elif choise == 4:
        print(area(num))