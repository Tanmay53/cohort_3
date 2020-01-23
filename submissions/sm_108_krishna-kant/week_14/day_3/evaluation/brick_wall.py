def create_odd_row(size):
    row = ""
    for loop in range(size):
        row += "|___"
    return row + "|\n"

def create_even_row(size):
    row = ""
    for k in range(width):
        if k is 0 :
            row += "__|"
        else:
            row += "___|"
    return row + "__\n"

def create_wall(width,height):
    wall = ""
    for i in range(height):
        if i % 2 is 0:
            wall += create_odd_row(width)
        else:
            wall += create_even_row(width)
    print(wall)
    
width = int(input("Enter width of wall"))
height = int(input("Enter height of wall"))
create_wall(width,height)


