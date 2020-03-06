import time

def show_msec():
    milisec = int(time.time()) * 1000
    return milisec


def decorator(func):
    def inner(*argv, **kwargs):
        start = show_msec()
        res = func(*argv, **kwargs)
        end = show_msec()
        diff = (end - start)
        print("Execution Time:- " +  str(diff))
        return res
    return inner
    
# def out():
#     print('out------')

# a = decorator(out)

# a()