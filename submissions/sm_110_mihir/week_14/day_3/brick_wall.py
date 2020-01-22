width=int(input("Enter width: "))
height=int(input("Enter height: "))
pipe="|"
full="___|"
right="__|"
left="__"
for i in range(0,height):
    if i%2 == 0:
        print(pipe,end="")
        for bricks in range(width):
            print(full,end="")
        
    else:
        for i in range(0,width+1):
            if i==0:
                print(right,end="")
            elif i==width:
                print(left,end="")
            else:
                print(full,end="")
    print()