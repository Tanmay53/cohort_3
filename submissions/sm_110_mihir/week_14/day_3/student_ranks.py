scores = {"Thor": [1,2,3], "Ironman": [3,4,5], "Hulk": [2,3,4]}
arr=[]
# do sum and update dict.
for k in scores:
    sum=0
    for ele in scores[k]:
        sum+=ele
    arr.append(sum)
    scores[k]=sum
    
# selection sort of sum list
for i in range(len(arr)-1):
    max=i
    for j in range(i+1,len(arr)):
        if arr[j]>arr[max]:
            max=j
    temp=arr[i]
    arr[i]=arr[max]
    arr[max]=temp

# search by value of sorted sum list
for items in arr:
    for k in scores:
        if scores[k]==items:
            print (k)