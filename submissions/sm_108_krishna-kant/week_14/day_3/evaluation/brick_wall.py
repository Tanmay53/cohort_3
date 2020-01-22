def create_wall(width,height):
    wall = ""
    for i in range(height):
        if i % 2 is 0:
            for k in range(width):
                wall += "|___"
            wall += "|\n"
        else:
            for k in range(width):
                if k is 0 :
                    wall += "__|"
                else:
                    wall += "___|"
            wall += "__\n"
    print(wall)
    
width = int(input("Enter width of wall"))
height = int(input("Enter height of wall"))
create_wall(width,height)


