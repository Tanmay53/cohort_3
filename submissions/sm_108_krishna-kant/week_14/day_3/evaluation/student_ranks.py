def count_sum(student_scores):
    for student in student_scores:
        scores = 0
        for x in student_scores[student]:
            scores += x
        student_scores[student] = scores
    scores = list()
    for i in student_scores:
        scores.append([student_scores[i],i])
    scores = sort_array(scores)
    for key in scores:
        print(key[1])

def sort_array(array):
    length = len(array)
    for i in range(length):
        for k in range(0,length-i-1):
            if array[k][0] < array[k+1][0]:
                array[k], array[k+1] = array[k+1], array[k]
    return array

scores = {"Thor": [1,2,3], "Ironman": [3,4,5], "Hulk": [2,3,4]}

count_sum(scores)