def brick_wall(width, height):
    for i in range(height):
        if i%2 == 0:
            printEvenRow(width)
        else:
            printOddRow(width)


def printEvenRow(width):
    s = '|___'*width + '|'
    print(s)

def printOddRow(width):
    s = '__'+'|___'*(width - 1) + '|__'
    print(s)

width, height = list(map(int, input("Enter Width, Height(Space Seperated): ").split()))
brick_wall(width, height)