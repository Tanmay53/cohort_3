import time

def time_elapsed(func):
    def inner():
        start_time = time.time()
        print('\n\n')
        print('code execution begins ...')
        func()
        elapsed_time = time.time() - start_time
        print('code execution ends...')
        print('Your code took ', elapsed_time * 1000, ' ms to execute.')
        
    return inner

@time_elapsed
def print_hello():
    print('Hello World')


@time_elapsed
def prime_no_till():
    i = 1
    total = 0
    while i < 40:
        j = 1
        count = 0
        while j <= i:
            if i % j == 0:
                count += 1
            j += 1        
        if count == 2:
            total += 1
        i = i + 1
    print('toal numbers : ', total)

prime_no_till()
print_hello()