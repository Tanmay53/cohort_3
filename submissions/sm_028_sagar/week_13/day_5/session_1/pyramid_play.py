no_of_rows = input()  #input is no of rows

#printin pyramid
def pyramid(input=4):
    rows = 2 * input + 1

    for i in range(0,rows):
        string = ''
        arr = []
        for j in range(0,rows+1):
            arr.append('.')
        for k in range(-i,i+1,2):
            arr[(((rows - 1) / 2) + 1) + k] = '0'
        
        #appending string
        for l in range(0,len(arr)):
            string += arr[l]
        
        print(string)

# pyramid(no_of_rows) 




#  var cols = 2 * rows + 1; //total columns
#     for (var i = rows - 1; i >= 0; i--) {
#         var str = '';
#         var arr = [];
#         for (var j = 1; j <= cols; j++) {
#             arr[j] = '.'
#         }
#         for (var k = -i; k <= i; k += 2) {
#             arr[(((cols - 1) / 2) + 1) + k] = '0';
#         }
#         for (var l = 1; l < arr.length; l++) {
#             str = str + arr[l]
#         }
#         console.log(str);
#     }


#inverse pyramid
def inverse_pyramid(input=4):                                                               
    rows = 2 * input + 1

    for i in range(rows-1,-1,-1):
        string = ''
        arr = []
        for j in range(0,rows+1):
            arr.append('.')
        for k in range(-i,i+1,2):
            arr[(((rows - 1) / 2) + 1) + k] = '0'
        
        #appending string
        for l in range(0,len(arr)):
            string += arr[l]
        
        print(string)
    
inverse_pyramid(no_of_rows)
        
