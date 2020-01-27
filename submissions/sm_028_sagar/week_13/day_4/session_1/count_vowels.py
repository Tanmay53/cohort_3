a = input()
count = 0
for s in a:
	s = s.lower()
	if(s == 'a' or s == 'e' or s == 'i' or s == 'o' or s == 'u'):
		count += 1

print(count)	
