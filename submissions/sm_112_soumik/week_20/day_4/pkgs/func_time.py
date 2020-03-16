from time import time


def test_decorator(func):
    def inner1(*argv, **kwargs):
        start = time()
        func(*argv, **kwargs)
        end = time()
        print("time taken is", str(end - start))

    return inner1


@test_decorator
def test_time(num):
    res = 0
    for i in range(num + 1):
        res = res*res + 1


test_time(10)
