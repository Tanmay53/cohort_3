input_string = input()

#camelCase = sagarKadu
def camelCase(input):
        arr = input.split()
        string = arr[0] 
        for i in range(1,len(arr)):
                string += arr[i][0].upper() + arr[i][1:]
        print(string)
                
camelCase(input_string)

#snake_case = sagar_kadu
def snake_case(input):
        arr = input.split()
        string = arr[0]
        for i in range(1,len(arr)):
                string += '_'+arr[i]
        print(string)

snake_case(input_string)

#hypen_case = sagar-kadu
def hypen_case(input):
        arr = input.split()
        string = arr[0]
        for i in range(1,len(arr)):
                string += '-'+arr[i]
        print(string)

hypen_case(input_string)