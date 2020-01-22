def pyramid(n):
    s = ''
    for i in range(n):
        s += '.'*(n - i)
        s += '0.'*(i+1)
        s += '.'*(n - i - 1)
        s += '\n'
    return s[:-1]

def inversePyramid(n):
    s = ''
    for i in range(n-1,-1,-1):
        s += '.'*(n - i)
        s += '0.'*(i+1)
        s += '.'*(n - i - 1)
        s += '\n'
    return s[:-1]

def rhombus(n):
    s = ''
    s += pyramid(n)+'\n'
    for i in range(n - 1, -1, -1):
        if i != n - 1:
            s += '.'*(n - i)
            s += '0.'*(i+1)
            s += '.'*(n - i - 1)
            s += '\n'
    return s[:-1]
