# Should have the following functions camel_case snake_case hypen_case which takes a string as input and returns the string the respective case
string = input("Enter string: ")
str_arr = string.split(" ")

# convert to camel case


def camel_case(arr):
    result = ""
    result += arr[0].lower()
    for i in range(1, len(arr)):
        x = arr[i]
        for j in range(len(x)):
            if j == 0:
                result += x[j].upper()
            else:
                result += x[j].lower()
    return result

# convert to snake case


def snake_case(arr):
    result = ""
    for i in range(len(arr) - 1):
        result += arr[i].lower()
        result += "_"
    result += arr[-1].lower()
    return result

# convert to hyphen case


def hyphen_case(arr):
    result = ""
    for i in range(len(arr) - 1):
        result += arr[i].lower()
        result += "-"
    result += arr[-1].lower()
    return result


print("Camel Case: ", camel_case(str_arr))
print("Sanke Case: ", snake_case(str_arr))
print("Hyphen Case: ", hyphen_case(str_arr))
