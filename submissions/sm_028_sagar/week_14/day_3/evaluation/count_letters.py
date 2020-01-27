string = list(map(str,input().split()))

def count_letter(string):
    letters = dict({})

    for word in string:
        for c in word:
            if c in letters:
                letters[c] = letters[c]+1
            else:
                letters[c] = 1

    for key in letters:
        print(key+' - '+str(letters[key]))

count_letter(string)
#test cases:
    #input : Masai School
    # M - 1
    # a - 2
    # s - 1
    # i - 1
    # S - 1
    # c - 1
    # h - 1
    # o - 2
    # l - 1

    #input : Sagar Kadu
    # S - 1
    # a - 3
    # g - 1
    # r - 1
    # K - 1
    # d - 1
    # u - 1