numbers = list(map(int, input("Enter Numbers of the List(Space Seperated): ").split()))

sumEvenIndices = 0
sumOddIndices = 0

for i in range(0, len(numbers), 2):
    sumEvenIndices += numbers[i]
for i in range(1, len(numbers), 2):
    sumOddIndices += numbers[i]

print(sumEvenIndices - sumOddIndices)