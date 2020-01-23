# Make wall
input_1 = input("Enter wall height: ")
input_2 = input("Enter wall width: ")
height = int(input_1)
width = int(input_2)

wall = ""
for h in range(height):
    if h % 2 == 0:
        for w in range(width):
            wall += "|___"
        wall += "|\n"
    else:
        for w in range(width):
            if w == 0:
                wall += "__|"
            else:
                wall += "___|"
        wall += "__\n"
print("=== WALL ===")
print(wall)

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
