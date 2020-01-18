given_string = input()
n=""
for x in range(len(given_string)-1,-1,-1):
    n = n + given_string[x]
print(n)

