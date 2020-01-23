def merge(arr, low, mid, high):
    i = low
    j = mid + 1
    sortedArr = []
    while i <= mid and j <= high:
        if arr[i] > arr[j]:
            sortedArr.append(arr[i])
            i += 1
        else:
            sortedArr.append(arr[j])
            j += 1
    
    while i <= mid:
        sortedArr.append(arr[i])
        i += 1
    
    while j <= high:
        sortedArr.append(arr[j])
        j += 1
    
    for k in range(low, high + 1):
        arr[k] = sortedArr[k - low]

def mergeSort(arr, low, high):
    if low < high:
        mid = low + (high - low)//2
        mergeSort(arr, low, mid)
        mergeSort(arr, mid + 1, high)
        merge(arr, low, mid, high)


scores = {"Thor": [1,2,3], "Ironman": [3,4,5], "Hulk": [2,3,4]}

scoreSum = {}

for k in scores:
    s = 0
    for a in scores[k]:
        s += a
    scoreSum[s] = k

sumArr = []
lenSumArr = 0
for k in scoreSum:
    lenSumArr += 1
    sumArr.append(k)

mergeSort(sumArr, 0, lenSumArr - 1)

for a in sumArr:
    print(scoreSum[a])