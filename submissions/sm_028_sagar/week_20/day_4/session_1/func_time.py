from time import time

def time_decorator(func):
        def inner():
            print('Start of time decorator')
            func()
            print('End of time decorator')

        return inner

@time_decorator
def print_timestamp():
    print('Timestamp:',time())

# timestamp = time_decorator(print_timestamp)
# timestamp()

print_timestamp()