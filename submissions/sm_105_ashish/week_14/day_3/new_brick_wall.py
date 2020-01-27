def even_rows(width):
    layer = list()
    for i in range(width):
        if i == 0:
            layer.append('|___|')
        else:
            layer.append('___|')
    return "".join(layer)

def odd_row(width):
    layer  = list()
    for i in range(width):
        if i == 0:
            layer.append('__|__')
        else:
            layer.append('_|__')
    return "".join(layer)

def print_brick_wall(height,width):
    wall_array = list()
    for j in range(height):
        if j%2 == 0:
            wall_array.append(even_rows(width))
        else:
            wall_array.append(odd_row(width))
    for i in wall_array:
        print(i)

print_brick_wall(2,1)