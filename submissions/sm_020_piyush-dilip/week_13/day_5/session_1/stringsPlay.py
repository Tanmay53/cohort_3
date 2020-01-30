# input string
ip = "LEARNING python for THE first TIME           "

#  function to convert string in lowercase
def lowerCase(string):
    uppercaseAlphabets = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
    lowercaseAlphabets = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    converted = ""
    for i in string:
        for j in range(len(lowercaseAlphabets)):
            if i == uppercaseAlphabets[j]:
                converted += lowercaseAlphabets[j]
            elif i == lowercaseAlphabets[j]:
                converted += lowercaseAlphabets[j]
    return converted

# function to capitalize first letter of string
def capitalizeFirstLetter(string):
    uppercaseAlphabets = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
    lowercaseAlphabets = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    converted = ""

    for j in range(len(lowercaseAlphabets)):
        if string[0] == lowercaseAlphabets[j]:
            converted += uppercaseAlphabets[j]

    converted += string[1:]
    return converted

# function to convert string in snake-case
def snakeCase(string):

    li = string.split()

    snakeCaseString = ""

    for i in range(len(li)):
        if i == len(li)-1:
            snakeCaseString += lowerCase(li[i])
        else:
            snakeCaseString +=  lowerCase(li[i]) + "_"
    
    return snakeCaseString

op = snakeCase(ip)
print("Snake case : " + op)


# function to convert string in hyphen-case
def hypenCase(string):

    li = string.split()

    hypenCaseString = ""

    for i in range(len(li)):
        if i == len(li)-1:
            hypenCaseString += lowerCase(li[i])
        else:
            hypenCaseString += lowerCase(li[i]) + "-"
    
    return hypenCaseString

op1 = hypenCase(ip)
print("Hyphen case : " +  op1)

# function to convert string in camel-case
def camelCase(string):

    li = string.split()

    camelCaseString = ""

    for i in range(len(li)):
        if i == 0:
            camelCaseString += lowerCase(li[i])
        else:
            camelCaseString += capitalizeFirstLetter(lowerCase(li[i]))
    
    return camelCaseString

op2 = camelCase(ip)
print("Camel case : " + op2)




        
