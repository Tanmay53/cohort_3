import time


def test_decorator(func):
    def timing(*argv, **kwargs):
        start_time = time.time()
        print(func(*argv, **kwargs))
        return ("===> %s seconds <===" % (time.time() - start_time))

    return timing


@test_decorator
def cube(n):
    return pow(n, 30)


print(cube(100000))
