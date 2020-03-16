# area
def area(n):
    return pow(n, 2)


# perimeter
def perimeter(n):
    return 4 * n


if __name__ == "__main__":
    x = input("Enter a side's length: ")
    print("Area:", area(int(x)))
    print("Perimeter:", perimeter(int(x)))
