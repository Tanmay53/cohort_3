def count_vowels(string):
    lower = 0
    upper = 0

    for ch in string:
        if ch in ['a', 'e', 'i', 'o', 'u']:
            lower = lower + 1
            continue
        
        if ch in ['A', 'E', 'I', 'O', 'U']:
            upper = upper + 1
    
    print('lower - ', lower)
    print('upper - ', upper)


string = input('Enter string : ')
count_vowels(string)

