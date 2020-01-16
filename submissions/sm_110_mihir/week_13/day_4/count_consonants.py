import re

name="Masai-school"
name=name.lower()
vowel=['a','e','i','o','u']
sum=0
for char in name:
    if(re.match('[a-z]',char)):
        if char not in vowel:
            sum+=1
print(sum)