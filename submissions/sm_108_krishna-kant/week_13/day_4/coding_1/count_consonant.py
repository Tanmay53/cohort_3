str = "hello masai"
vowels = ['a','e','i','o','u'," "]
consonantCount = 0 
for i in str:
    if i not in vowels:
        consonantCount += 1
print(consonantCount)
