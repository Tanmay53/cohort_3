a = set(map(str,input().split()))
b = set(map(str,input().split()))
c = set(map(str,input().split()))


def common_char(a,b,c):
    common = set({})
    for char in a:
        if char in b and char in c:
            common.add(char)
            
    print(common)

common_char(a,b,c)

#tc
    # a b c    
    # b b a
    # b c c
    # output: {'b'}

    # a b c d e
    # a e f h k
    # a b c z m
    # output: {'a'}