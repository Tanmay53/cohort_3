import time

def compute_time(func):
    def time_is(*argv,**kwargs):
        start = time.process_time()
        print(f"Factorial is {func(*argv , **kwargs)}")
        stop = time.process_time()
        print(f"Elasped time is {stop-start} seconds")
    return time_is


@compute_time
def factorial(n):
    if n is 1:
       return n
    else:
        fact = 1
        list_range = list(range(1, n + 1))
        for every in list_range:
            fact = fact * every
        return fact

factorial(50000)