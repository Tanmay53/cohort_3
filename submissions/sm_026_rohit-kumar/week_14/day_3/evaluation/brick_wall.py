def full_brick(n):
    return '|___|' * n
 
def middle(n):
    if n == 1:
        return '__||__'
    elif n == 2:
        return '__|___|__'
    else:
        return '__' + '|___|' * (n-1) +'__'

def print_wall(height, width):
    for i in range(height):
        if i % 2 == 0:
            print(full_brick(width))    
        else:
            print(middle(width))



width = int(input('Enter brick wall width : '))
height = int(input('Enter brick wall height : '))

print_wall(height, width)    