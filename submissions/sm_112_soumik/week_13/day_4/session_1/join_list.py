arr = ["hey you ", "you are a good person", "maybe", "!"]
char = " "


store = ""
for letter in arr:
    for alpha in letter:
        if alpha == char:
            pass
        else:
            store += alpha
print(store)
