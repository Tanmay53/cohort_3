# Should have the following functions camel_case snake_case hypen_case which takes a string as input and returns the string the respective case
uppercase = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z"
]
lowercase = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
]
# convert to lower case


def convert_to_lower(c):
    for i in range(len(uppercase)):
        if uppercase[i] is c:
            return lowercase[i]
    return c

# convert to upper case


def convert_to_upper(c):
    for i in range(len(lowercase)):
        if lowercase[i] is c:
            return uppercase[i]
    return c

# convert case


def convert_case(arr, seprator):
    result = ""
    for i in range(len(arr) - 1):
        for c in arr[i]:
            result += str(convert_to_lower(c))
        result += seprator

    for c in arr[-1]:
        result += str(convert_to_lower(c))
    return result

# camel case


def camel_case(arr):
    result = ""
    for c in arr[0]:
        result += str(convert_to_lower(c))
    for i in range(1, len(arr)):
        x = arr[i]
        for j in range(len(x)):
            if j == 0:
                result += str(convert_to_upper(x[j]))
            else:
                result += str(convert_to_lower(x[j]))
    return result


string = input("Enter string: ")
str_arr = string.split(" ")

print("Camel Case: ", camel_case(str_arr))
# convert to snake case
print("Sanke Case: ", convert_case(str_arr, "_"))
# convert to hyphen case
print("Hyphen Case: ", convert_case(str_arr, "-"))
