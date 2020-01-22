def brick_wall(N):
    # my_arr = [2,6,10,14,18,22,24,28,32,36,40,44]
    my_arr = range(2,N*4-3,4)
    final_wall = list()
    for i in range(N):
        layer = list()
        if i%2 == 1:
            for j in range(N*4-3):
                if j%4 == 0:
                    layer.append('|')
                else:
                    layer.append('_')
            final_wall.append(''.join(layer))
            layer = list()
        else:
            layer = list()
            for j in range(N*4-3):
                if j in my_arr:
                    layer.append('|')
                else:
                    layer.append('_')
            final_wall.append(''.join(layer))
            layer = list()
    result =''
    for x in final_wall:
        result += x
        result += "\n"
    return result
print(brick_wall(8))
    
