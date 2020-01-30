# Print the even numbers from 0 to given limit (HINT: Use range())

limit = input('Enter Limit' )

for limit in range(limit+1):
    if(limit % 2 == 0):
        print(limit)