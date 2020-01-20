a = input()
count = 0
for s in a:
	a = a.lower()
	if(s != 'a' and s != 'e' and s != 'i' and s != 'o' and s != 'u'):
		count+=1

print(count)
