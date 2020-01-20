limit = 10
num = 2
result = []

for i in range(1, limit+1):
    if i % num == 0:
        result.append(i)

print(sum(result)/len(result))