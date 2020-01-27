width,height = map(int,input().split())


def printWall(width,height):
    for i in range(height):
        if i % 2 == 0: printEvenRows(width)
        else: printOddRows(width+1)

def printEvenRows(width):
    string = ''
    for b in range(width):
        if b == width - 1: string += '|___|'
        else: string += '|___'
    print(string)
    
    
def printOddRows(width):
    string = ''
    for b in range(width):
        if b == 0: string += '__'
        elif b == width-1: string += '|__'
        else: string += '|___'
    print(string)
    


printWall(width,height)
        