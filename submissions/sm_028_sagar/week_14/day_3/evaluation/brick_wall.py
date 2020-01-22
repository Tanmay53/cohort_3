width = int(input())
height = int(input())

def wall(width,height):
    #wall rows
    string = ''
    for i in range(height):
        if i % 2 == 0:
            for b in range(width):
                if b == width - 1:
                    string += '|___|'
                else: string += '|___'
            string += '\n'
        else:
            for c in range(height):
                if c == 0:
                    string += '__'
                elif c == height-1:
                    string += '|__'
                else:
                    string += '|___'
            string += '\n'
    print(string)

wall(width,height)
        