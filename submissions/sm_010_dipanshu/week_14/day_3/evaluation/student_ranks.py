scores = {
    "Thor": [1, 2, 3],
    "Ironman": [3, 4, 5],
    "Hulk": [2, 3, 4]
}

result = {}

for key, value in scores.items():
    res = 0
    for mark in value:
        res += mark
    result[res] = key


def sort(result):
    res_li = list(result.keys())

    for i in range(len(res_li)):
        for j in range(0, len(res_li) - i - 1):
            if (res_li[j] < res_li[j + 1]):
                temp = res_li[j]
                res_li[j] = res_li[j + 1]
                res_li[j + 1] = temp
    return res_li


final_result = sort(result)
for mark in final_result:
    print(result[mark])
