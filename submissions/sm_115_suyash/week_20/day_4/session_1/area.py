def find_area(l,b):
    return l*b

def find_perimeter(l,b):
    return 2 * (l + b)


print("---:Enter length and breadth:---")
length = int(input())
width = int(input())

area = find_area(length, width)
print("Area is: ", area,"m^2")
perimeter = find_perimeter(length, width)
print("Perimeter is: ", perimeter,"m")