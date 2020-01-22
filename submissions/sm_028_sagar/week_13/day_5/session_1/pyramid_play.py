no_of_rows = input()  #input is no of rows

#printin pyramid
def pyramid(input=4):
    string = ''
    for a in range(input,0,-1):
        for i in range(0,a):
            string += '.'
        for j in range(0,input-i):
            string += '0.'
        for k in range(0,a-1):
            string += '.'
        string += '\n'
    print(string)


#Inverse Pyramid
def inverse(input):
    string = ''
    for a in range(input,0,-1):
        for k in range(0,input-a+1):
            string += '.'
        for j in range(0,a):
            string += '0.'
        for i in range(0,input-a):
            string += '.'
        string += '\n'
    print(string)

#rhombus 
def rhombus(input):
    string = ''
    for a in range(input,0,-1):
        #a = 4,3,2,1
        for i in range(0,a):
            string += '.'
        for j in range(0,input-i):
            string += '0.'
        for k in range(0,a-1):
            string += '.'
        string += '\n'

    for a in range(input-1,0,-1):
        for k in range(0,input-a+1):
            string += '.'
        for j in range(0,a):
            string += '0.'
        for i in range(0,input-a):
            string += '.'
        string += '\n'
    print(string)


# pyramid(no_of_rows) 
# inverse(no_of_rows)
rhombus(no_of_rows)

        
