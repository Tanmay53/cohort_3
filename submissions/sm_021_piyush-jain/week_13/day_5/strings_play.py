string = "     HELLO_MasAI-coding     "

upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L",
         "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
         "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

x = 0
newString = ""
length = len(string)

# Trim from start
while string[x] not in upper and string[x] not in lower:
    x = x+1

# Trim from end
y = 1
while string[-y] not in upper and string[-y] not in lower:
    y = y+1
    length = length-1

# Convert string to lower case
while x < length:
    if string[x] in upper:
        index = upper.index(string[x])
        newString = newString+lower[index]
        x = x+1
    else:
        newString = newString+string[x]
        x = x+1

# Camel case function


def camel(new):
    x = 0
    string = ""
    while x < len(new):
        if(new[x] != " " and new[x] != "-" and new[x] != "_"):
            string = string+new[x]
            x = x+1
        else:
            x = x+1
            index = lower.index(new[x])
            string = string+upper[index]
            x = x+1
    return string
# Snake case function


def snake(new):
    x = 0
    string = ""
    while x < len(new):
        if(new[x] != " " and new[x] != "-"):
            string = string+new[x]
            x = x+1
        else:
            string = string+"_"
            x = x+1
    return string
# Hypen case function


def hypen(new):
    x = 0
    string = ""
    while x < len(new):
        if(new[x] != " " and new[x] != "_"):
            string = string+new[x]
            x = x+1
        else:
            string = string+"-"
            x = x+1
    return string


print(camel(newString))
print(snake(newString))
print(hypen(newString))
