flag=True
while flag:
    print("Enter range limit. should be greater than zero")
    n=int(input())
    if(n<0):
        print("Oops! wrong input")
    else:
        flag=False

while n>=0:
    print(n)
    n-=1