def full_brick(num):
    brick = "___|"

    full_brick_row = "|"

    for i in range(num):
        full_brick_row += brick

    print(full_brick_row)


def half_brick(num):
    brick = "_|__"

    half_brick_row = "_"

    for i in range(num):
        half_brick_row += brick

    print(half_brick_row)


def build_wall(width, height):
    for i in range(height):
        if (i % 2 == 0):
            full_brick(width)
        else:
            half_brick(width)


build_wall(5, 5)
