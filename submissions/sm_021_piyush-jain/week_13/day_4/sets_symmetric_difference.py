set1={1,2,3,4,5,11,12,13,14,15}
set2={1,2,3,4,5,6,7,7,8,9,10}
print((set2|set1)-(set1 & set2))
'''
Getting a union and then subtracting the common items
'''
#using ^ operator
print(set1^set2)