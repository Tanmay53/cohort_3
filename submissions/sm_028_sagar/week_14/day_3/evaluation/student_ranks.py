scores = {"Thor": [1,2,3], "Ironman": [3,4,5], "Hulk": [2,3,4]}

def student_ranks(scores):
    total = []
    max = 0
    for key in scores:
        sum = 0
        for i in scores[key]:
            sum += i
        if sum > max: max = sum
        total.append([sum,key])

    for i in range(max,-1,-1):
        for j in total:
            if i == j[0]:
                print(j[1])


student_ranks(scores)


#tc 
    # scores = {
    #     'Thor' : [1,2,3],
    #     'Ironman':[3,4,5],
    #     'Hulk':[2,3,4]
    # }
    # output:
    # Ironman
    # Hulk
    # Thor

    # scores = {
    # 'rose' : [1,4], 
    # 'denim':[3,5], 
    # 'jasmine':[3,6] 
    # }
    # output:
    # jasmine
    # denim
    # rose
    