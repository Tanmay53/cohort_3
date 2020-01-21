a = ['sagar','kedar','pure']
char = 'and'

str = ''
for i in range(0,len(a)):
	if(i == 0):
		str += a[i]
		continue
	str += char + a[i]

print(str)

