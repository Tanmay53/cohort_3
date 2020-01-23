# Make wall
def even_row(width):
    wall = ""
    for _ in range(width):
        wall += "|___"
    wall += "|"
    return wall


def odd_row(width):
    wall = ""
    for w in range(width):
        if w == 0:
            wall += "__|"
        else:
            wall += "___|"
    wall += "__"
    return wall


def make_wall(height, width):
    for h in range(height):
        if h % 2 == 0:
            print(even_row(width))
        else:
            print(odd_row(width))


input_1 = input("Enter wall height: ")
input_2 = input("Enter wall width: ")
height = int(input_1)
width = int(input_2)
print("=== WALL ===")
make_wall(height, width)


# Sample Case:
'''
Enter wall height: 5
Enter wall width: 4
=== WALL ===
|___|___|___|___|
__|___|___|___|__
|___|___|___|___|
__|___|___|___|__
|___|___|___|___|
'''
