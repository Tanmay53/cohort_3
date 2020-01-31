input_string = input()
count = 0
li = ["a","e","i","o","u"]
i = 0

while i < len(li):
    if li[i] not in input_string:
        count += 1
    i += 1
    
print(count)