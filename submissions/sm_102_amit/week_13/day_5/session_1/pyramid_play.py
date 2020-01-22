def pyramid(level):
    pos = 0
    row = 0
    line = ""
    for i in range(level, 0, -1):
        row += 1
        pos = i
        flg = 0
        for col in range(level * 2 + 1):
            if col == pos and flg < row:
                line += 'o'
                flg += 1
                if row != 1:
                    pos = pos + 2
            else:
                line += '.'
        print(line)
        line = ""


def reverse(level):
    pos = 0
    row = level + 1
    line = ""
    for i in range(1, level + 1):
        row -= 1
        pos = i
        flg = 0
        for col in range(0, level * 2 + 1):
            if col == pos and flg < row:
                line += "o"
                flg += 1
                if row != 1:
                    pos += 2
            else:
                line += "."
        print(line)
        line = ""


def rhombus(level):
    pyramid(level)
    reverse(level)


level = int(input("Enter level: "))
pyramid(level)
print("\n")
reverse(level)
print("\n")
rhombus(level)
