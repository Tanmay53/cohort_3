# Print the average of all the numbers from 0 to the given limit that are divisible by the given number
limit = input("Enter limit: ")
sum = 0
for i in range(0, int(limit) + 1):
    sum += i
avg = sum / int(limit)
print(avg)
