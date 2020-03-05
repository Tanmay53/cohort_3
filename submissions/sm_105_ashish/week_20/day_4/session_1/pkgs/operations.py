
# function to return factorial of a given input.
def factorial(N):
    if N == 1:
        return 1
    else:
        return N*(factorial(N-1))

# function to return cube value of a given number.
def cube(N):
    return N*N*N
