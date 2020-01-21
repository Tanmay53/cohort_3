lst = input('Enter numbers seperated by space : ').split(' ')

nums = []
for n in lst:
    nums.append(int(n))

s = set(nums)    
print(len(s))
