# function to find area and perimeter of a square
from func_time import *

@test_decorator
def area_square(side):
    return (side ** 2)

@test_decorator
def perimeter(side):
    return (4 * side)
