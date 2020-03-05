def factorial(n):
    x = 1
    for i in range(1, n+1):
        x = x * i
    print(str(n)+" factorial: ")
    print(x)


def cube(n):
    x = n**3
    print("cubeof: " + str(n))
    print(x)

# n = input()
# factorial(n)
# cube(n)
