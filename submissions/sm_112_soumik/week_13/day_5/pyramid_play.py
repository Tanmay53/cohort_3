rows = int(input("Enter the no of rows !"))
# rows = 4


def pyramid_pattern(rows):
    pyramid_list = []
    temp_str = ""
    for i in range(rows):
        for j in range(rows - i):
            temp_str += "."
        for j in range(rows - j):
            temp_str += "0."
        for j in range(rows - i):
            temp_str += "."
        pyramid_list.append(temp_str)
        temp_str = ""
    return pyramid_list


pyramid = pyramid_pattern(rows)
for items in pyramid:
    print(items)

# inverse pyramid
print("Inverse Pyramid :")
for items in pyramid[::-1]:
    print(items)

# rhomus
print(".....rhombus")
print()


rhombus = []
for items in pyramid[:len(pyramid)-1]:
    rhombus.append(items)

for items in pyramid[::-1]:
    rhombus.append(items)

for lines in rhombus:
    print(lines)
