def pyramid(level):
    step = level

    for i in range(1, level+1):
        print('.'*(step-1) + '.o'*i + '.'*step)
        step -= 1

def inverse_pyramid(level):
    step = 1

    for i in range(level, 0, -1):
        print('.'*(step-1) + '.o'*i + '.'*step)
        step += 1

def rhombus(level):
    step = level

    for i in range(1, level):
        print('.'*(step-1) + '.o'*i + '.'*step)
        step -= 1

    inverse_pyramid(level)

rhombus(4)