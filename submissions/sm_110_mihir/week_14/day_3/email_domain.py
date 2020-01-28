def index_of(string,char):
    for i in range(0,len(string)):
        if string[i] == char:
            return i
    return -1

def get_domain(email):
    i=index_of(email,"@")
    print(email[i+1:])

get_domain("hello@masaischool.com")