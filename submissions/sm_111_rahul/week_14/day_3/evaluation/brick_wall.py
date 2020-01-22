width = 4
height = 5
for i in range(height):
    if i % 2 == 0:
        for j in range(width):
            print("|__", end="")
        print("|", end="\n")
    else:
        for j in range(width):
            if j == 0:
                print("__|", end="")
            else:
                print("__|", end="")
        print("__", end="\n")
