scores = {"Thor": [1, 2, 3], "Ironman": [3, 4, 5], "Hulk": [2, 3, 4]}


def sorting(ar):
    size = len(ar)
    for i in range(size):
        for j in range(0, size-i-1):
            if ar[j] < ar[j+1]:
                ar[j], ar[j+1] = ar[j+1], ar[j]

    return ar


def sum_arr(ar):
    total = 0
    for i in ar:
        total += i
    return total


sum_list = []
string = ""
for value in scores:
    sum_list.append([sum_arr(scores[value]), value])


sorting(sum_list)
for superhero in sum_list:
    print(superhero[1])





