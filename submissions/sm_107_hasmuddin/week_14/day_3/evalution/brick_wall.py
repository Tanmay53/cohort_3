height = int(input("Height: "))
width = int(input("Width: "))
for i in range(height):
    if i % 2 is 0:
        for j in range(width):
            print("|___", end="")
        print("|\n")
    else:
        for j in range(width):
            if j is 0:
                print("__", end="")
            else:
                print("|___", end="")
        print("|__\n")
