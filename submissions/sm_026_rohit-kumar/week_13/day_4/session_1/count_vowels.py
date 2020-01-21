lst = ['abcd', 'samsom', 'allahabad', 'bangalore']

count = 0
for str in lst:
    for s in str:
        if s in 'AEIOUaeiou':
            count = count + 1
    print(str,' : ', count)
    count = 0
