from time import time
def func_time(func_in):
    start = time()
    func_in()
    end=time()
    print("time take to execute :",end-start)
    return func_in

def hello_world():
    print("hello world")

print(func_time(hello_world))