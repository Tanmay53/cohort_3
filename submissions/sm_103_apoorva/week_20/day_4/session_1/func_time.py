from time import time
from pkgs.operations import *
from pkgs.area import *
def test_decorator(func):
    def timing(*argv, **kwargs):
        start_time = time()
        func(*argv, **kwargs)
        end_time = time()
        print(end_time-start_time)
    return timing

@test_decorator
def call():
    print(factorial(5))
    


call()