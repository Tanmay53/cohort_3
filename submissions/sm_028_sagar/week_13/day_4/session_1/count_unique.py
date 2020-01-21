numbers = [1,1,2,3,4,4,5,6,7,7]

number_set = set({})

for i in range(0,len(numbers)):
    number_set.update([numbers[i]])

print(len(number_set))