string="masai-school"
kv={}
for char in string:
    if char not in kv:
        kv[char]=1
    else:
        kv[char]=kv[char]+1
for key in kv:
    if kv[key]>1:
        print(key,end=",")