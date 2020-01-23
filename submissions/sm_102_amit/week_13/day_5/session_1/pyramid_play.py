line = list()


def create_list(level):
    pos = 0
    row = 0
    l = ""
    for i in range(level, 0, -1):
        row += 1
        pos = i
        flg = 0
        for col in range(level * 2 + 1):
            if col == pos and flg < row:
                l += 'o'
                flg += 1
                if row != 1:
                    pos = pos + 2
            else:
                l += '.'
        line.append(l)
        l = ""
    return line


def pyramid(lines):
    for line in lines:
        print(line)


def inverse(lines):
    for line in lines[::-1]:
        print(line)


def rhombus(lines, level):
    pyramid(lines)
    for line in lines[level - 2::-1]:
        print(line)


level = int(input("Enter level: "))
line_list = create_list(level)
pyramid(line_list)
print("\n")
inverse(line_list)
print("\n")
rhombus(line_list, level)
