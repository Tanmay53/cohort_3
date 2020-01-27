scores  = {'Thor': [1,2,3], "Ironman": [3,4,5] ,"Hulk": [2,3,4]}

scores_with_totals = dict()

for i in scores:
    sum = 0
    for j in scores[i]:
        sum += j
    scores_with_totals[i] = sum
    sum = 0


scores_list = []
Name_list = []

for i in scores_with_totals:
    scores_list.append(scores_with_totals[i])
    Name_list.append(i)

def swap(arr,index1,index2):
    temp = arr[index1]
    arr[index1] = arr[index2]
    arr[index2] = temp
    return arr
for i in range(len(scores_list)):
    for j in range(len(scores_list)-1):
        if scores_list[j] < scores_list[j+1]:
            swap(Name_list,j,j+1)
for i in Name_list:
    print(i)