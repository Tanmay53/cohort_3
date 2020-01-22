a = set(map(str,input().split()))
b = set(map(str,input().split()))
c = set(map(str,input().split()))

common = set({})

for char in a:
    if char in b and char in c:
        common.add(char)
print(common)

#tc
    # a b c    
    # b b a
    # b c c
    # output: {'b'}

    # a b c d e
    # a e f h k
    # a b c z m
    # output: {'a'}