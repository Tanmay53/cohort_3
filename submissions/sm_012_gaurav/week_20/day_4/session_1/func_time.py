from time import time

def func_time(func):
    def calcTime(*args):
        start = time()
        print(func(args[0]))
        print((time() - start))
    return calcTime

@func_time
def factorial(n):
    res = 1
    for i in range(1, n + 1):
        res *= i
    return res

factorial(500)