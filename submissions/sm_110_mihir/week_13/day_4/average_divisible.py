print("Enter range limit")
limit=int(input())
print("Enter divisor")
div=int(input())
for i in range(limit):
    if i%div == 0:
        print(i)