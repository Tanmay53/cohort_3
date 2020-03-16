import time


def decorator(fun):
    def inner(*arg):
        print("start", time.time())
        start = time.time()
        fun(*arg)
        print("end", time.time())
        end = time.time()
        print("time taken : ", end-start)
    return inner


@decorator
def hello_world(li, a, me="wow"):
    i = 1
    print(f"{li} {a}, {me}")
    while True:
        print(i)
        i += 1
        if(i == 34567):
            break


hello_world("hello", "world", "start working")
