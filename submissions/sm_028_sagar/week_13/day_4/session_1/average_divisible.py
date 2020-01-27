limit = input()
div = input()

divCount = 0
sum = 0
for i in range(0,limit+1):
	if(i % div == 0):
		sum+=i
		#print('sum',sum)
		divCount+=1

avg = sum/divCount
print(avg)
