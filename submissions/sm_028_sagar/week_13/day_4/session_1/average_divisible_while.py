limit = input()
div = input()


sum = 0
divCount = 0

i = 0
while i <= limit:
	if(i % div == 0):
		sum += i
		divCount +=1

	i+=1

avg = sum / divCount
print(avg)	
