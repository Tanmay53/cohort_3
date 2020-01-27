email = input() #valid email input

def domain(email):
    for i in range(len(email)):
        if email[i] == '@':
            print(email[i+1:])
            break

domain(email)


