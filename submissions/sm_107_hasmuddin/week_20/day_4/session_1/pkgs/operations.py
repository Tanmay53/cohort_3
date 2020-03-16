def factorial(n):
    if n == 1 or n == 2:
        return n
    else:
        return n * factorial(n-1)


def cube(number):
    return pow(number, 3)
