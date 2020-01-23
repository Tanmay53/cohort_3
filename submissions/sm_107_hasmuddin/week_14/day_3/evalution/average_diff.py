numbers = list(map(int, input("Numbers: ").split()))

ev_sum = 0
od_sum = 0
for i in range(len(numbers)):
    if i % 2 is 0:
        ev_sum += numbers[i]
    elif i % 2 is not 0:
        od_sum += numbers[i]

dif = ev_sum - od_sum
print(dif)