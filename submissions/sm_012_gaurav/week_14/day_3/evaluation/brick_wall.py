def brick_wall(width, height):
    s = ''
    for i in range(height):
        if i%2 == 0:
            s += '|___'*width
            s += '|\n'
        else:
            s += '__'
            s += '|___'*(width - 1)
            s += '|__\n'
    return s[:-1]


width, heigth = list(map(int, input("Enter Width, Height(Space Seperated): ").split()))
print(brick_wall(width, heigth))