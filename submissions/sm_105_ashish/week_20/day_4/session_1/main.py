from pkgs.operations import *
from pkgs.area import *
from pkgs.func_time import *

def decorator(func):
    def method(*argv,**kwargs):
        start = show_time()
        ans = func(*argv,**kwargs)
        end = show_time()
        print("execution time is : " + str(end-start)+" ms")
        return ans
    return method


factorial = decorator(factorial)
cube = decorator(cube)
area_square = decorator(area_square)
perimeter_square = decorator(perimeter_square)



if __name__ == "__main__": 
    o = input('Please select the operation :\n 1. Factorial: \n 2. cube: \n 3. Area of square: \n 4. Perimeter of square :\n Please select your option number : ')
    n = input('Please Enter your Number : ')

    if int(o) == 1:
        print("Factorial of " + n + " is : " + str(factorial(int(n))))
    elif int(o) == 2:
        print("Cube of " + n + " is : " + str(cube(int(n))))
    elif int(o) == 3:
        print("area of square with side length " + n + " is : " + str(area_square(int(n))))
    elif int(o) == 4:
        print("perimeter of square with side length " + n + " is : " + str(perimeter_square(int(n))))





