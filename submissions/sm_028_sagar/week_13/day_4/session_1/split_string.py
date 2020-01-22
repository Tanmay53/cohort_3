s = input()
split = input()

str = ''
list = []

for i in s:
	if(i == split):
		list.append(str)
		print(list)
		str = ''
		continue
	str += i

list.append(str)
print(list)

