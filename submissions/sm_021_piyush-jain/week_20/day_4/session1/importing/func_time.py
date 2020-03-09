def test_decorator(func):
    def inner(*argv,**kwargs):
        print("reached")
        func(*argv,**kwargs)
        print("reached")
    return inner

@test_decorator
def func(name,surname,key='test'):
    print('hello %s %s'%(name,surname))
    
func("piyush","jain")       