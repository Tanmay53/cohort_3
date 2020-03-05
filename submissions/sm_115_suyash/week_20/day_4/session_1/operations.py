# function for find factorial of a number.
def findFact(num):
    if(num == 1):
        return 1
    else:
        return num * findFact(num - 1)

# print("Find factorial Enter Your Number: ")
# input1 = int(input())
# factorial = findFact(input1)

# print(factorial)

# function for find cube of a number.
def findCube(num):
    return num ** 3

# print("Find cube?? Enter your number: ")
# input2 = int(input())
# cube = findCube(input2)

# print(cube)
