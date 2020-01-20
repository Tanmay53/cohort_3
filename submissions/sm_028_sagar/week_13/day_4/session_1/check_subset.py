first = [1,2,3,10]
second = [7,6,4,2,3,4,1]

count = 0
for i in range(0,len(first)):
    for j in range(0,len(second)):
        if(first[i] == second[j]):
            count+=1
            break
        

if(count == len(first)):
        print('first set is subset of second array')
else:
    print('first set is not subset of second array')
    


