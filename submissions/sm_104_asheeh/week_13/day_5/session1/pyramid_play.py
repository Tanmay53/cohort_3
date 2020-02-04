level = int(input())

def printPattern(stage):
    li = list()
    pattern = str()
    for i in range(stage):
        for j in range(0, stage - i, 1):
           pattern += "." 
        for j in range(0, i + 1, 1):
            pattern += "0."
        for j in range(0, stage - i - 1, 1):
            pattern += "."
        li.append(pattern)
        pattern = ""

    return li

def pyramid(level):
    module = printPattern(level)
    for ele in module:
        print(ele)

def inversePyramid(level):
    module = printPattern(level)
    for i in range(len(module) - 1, -1, -1):
        print(module[i])

def rhombous(level):
    module = printPattern(level)
    for ele in module:
        print(ele)
    for i in range(len(module) - 2, -1, -1):
        print(module[i])

pyramid(level)
print("\n")
inversePyramid(level)
print("\n")
rhombous(level)

