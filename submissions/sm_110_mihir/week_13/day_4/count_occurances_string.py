string="masai-school"
kv={}
for char in string:
    if char not in kv:
        kv[char]=1
    else:
        kv[char]=kv[char]+1
print(kv)
