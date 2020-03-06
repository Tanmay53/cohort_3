def factorial(n):
    fact = 1
    for i in range(1, n):
        fact += (fact * i)
    return fact

def find_cube(n):
    return (n * n * n)
