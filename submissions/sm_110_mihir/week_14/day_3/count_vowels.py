lower=['a','e','i','o','u']
count_lower=0
upper=['A','E','I','O','U']
count_upper=0
string="MASAI School"
for char in string:
    if char in lower:
        count_lower+=1
    elif char in upper:
        count_upper+=1
print("lower - ",str(count_lower))
print("UPPER - ",str(count_upper))