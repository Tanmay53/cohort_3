lw = ["a", "e", "i", "o", "u"]
up = ["A", "E", "I", "O", "U"]

st = str(input("type: "))
l_count = 0
u_count = 0
for s in st:
    if s in lw:
        l_count += 1
    elif s in up:
        u_count += 1

print(f'lower : {l_count}')
print(f'UPPER : {u_count}')