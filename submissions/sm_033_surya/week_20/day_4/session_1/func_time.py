from time import time


def time_decorator(func):
    def inner1(*argv, **kwargs):
        ts = time()
        func(*argv, **kwargs)
        te = time()
        print((te - ts))
    return inner1


def prime(n):
    for i in range(2, n+1):
        if (n % i == 0):
            return False
        return True


@time_decorator
def print_time(n):
    for i in range(2, n):
        if prime(i):
            print(i)


n = input()
print_time(n)
