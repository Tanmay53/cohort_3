string = "abbcccddddeeeee"
alpha = {}
for x in string:
    if x in alpha:
        alpha[x] = alpha[x]+1
    else:
        alpha[x] = 1
print(alpha)
