name="Masai-School"
vowel=['A','a','e','E','i','I','o','O','u','U']
sum=0
for char in name:
    if char in vowel:
        sum+=1
print("Vowel count:"+str(sum))