email = input() #valid email input

for i in range(len(email)):
    if email[i] == '@':
        print(email[i+1:])

