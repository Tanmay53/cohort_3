width = int(input('Enter brick width: '))
height = int(input('Enter brick height: '))

for h in range(height):
    if h % 2 == 0:
        layer =''
        for i in range(4*width+1):
            if i%4 == 0:
                layer += '|'
            else:
                layer += '_'
        print(layer)
    else:
        layer =''
        pipe_index = 2
        for i in range(4*width+1):
            if i <= 1 or i >= (4*width-1):
                layer += '_'
            else:
                if i == pipe_index:
                    layer += '|'
                    pipe_index += 4
                else:
                    layer += '_'
        print(layer)