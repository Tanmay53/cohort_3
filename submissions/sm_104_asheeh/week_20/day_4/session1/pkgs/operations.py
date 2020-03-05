# functions to find factorial and cube of a number
from func_time import *

@test_decorator
def factorial(n):
    if n is 1:
        return 1
    return n * factorial(n - 1)

@test_decorator
def cube(n):
    return (n ** 3)