from pkgs.operations import factorial
from datetime import datetime


def func_time(func):
    def calculate(num):
        start = datetime.now()
        func(num)
        end = datetime.now()
        return end - start

    return calculate


factorial = func_time(factorial)

print(factorial(9999))
