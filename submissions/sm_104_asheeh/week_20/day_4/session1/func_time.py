import time

def test_decorator(func):
    def inner1(*argv, **kwargs):
        start_time = time.time()
        output = func(*argv, **kwargs)
        end_time = time.time()
        print("Execution time is: ", (end_time - start_time))
        return output

    return inner1

# def test_decorator(func):
#     def inner1(*argv, **kwargs):
#         print('-------')
#         func(*argv, **kwargs)
#         print('-------')

#     return inner1

# @test_decorator
# def print_hello(ii, aa, key = 'test'):
#     print('hello %s %s'%(ii, aa))

# #print_hello = test_decorator(print_hello)

# print_hello('masai', 'school')
