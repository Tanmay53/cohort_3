# Print the odd numbers from 0 to given limit

print('Enter limit')
limit = input()

for x in range(limit+1):
    if x%2!=0:
        print(x)

# Print the odd numbers from given limit to 0
# while limit>=0:
#     if limit%2==1:
#         print(limit)
#     limit-=1