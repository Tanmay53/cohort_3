lst = ['abcd', 'samsom', 'allahabad', 'bangalore']

consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z']

count = 0
for str in lst:
    for s in str:
        if s.lower() in consonants:
            count = count + 1
    print(str, ": ", count)
    count = 0