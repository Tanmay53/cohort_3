width=int(input("Enter width: "))
height=int(input("Enter height: "))

def get_even_row(width):
    print("|",end="")
    for _ in range(width):
            print("___|",end="")

def get_odd_row(width):
    for i in range(0,width+1):
            if i==0:
                print("__|",end="")
            elif i==width:
                print("__",end="")
            else:
                print("___|",end="")

for i in range(0,height):
    if i%2 == 0:
        get_even_row(width)        
    else:
        get_odd_row(width)
    print()