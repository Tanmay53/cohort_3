# name = "Masai"

# def show_name():
#     name = "School"
#     print(name)

# print(name)
# show_name()
# print(name)

# def show_name():
#     global name
#     name = "School"
#     print(name)

# show_name()
# print(name)

# name = "Masai"

# def show_name():
#     global name
#     name = "School"
#     print(name)
#     name = "Hello"
#     name = "Ashish"

# print(name)
# show_name()
# print(name)

# def exponent(a, b):
#     c = a ** b
#     return c

# print(exponent(2,4))

# //PASS BY VALUE
# def check(num):
#     print(num)
#     # num = num + (4,)
#     print("Number inside: "+ str(num))
#     print("ID inside the function:" + str(id(num)))

# # num = 4
# num = (2,3)
# print("id outside the function: " + str(id(num)))
# check(num)
# print("number after passing to function: " + str(num))
# print("id outside after passing to function " + str(id(num)))


# PASS BY REFERENCE
# def check(li):
#     print(li)
#     li.append(5)
#     print(li)
#     print("ID inside the function: " + str(id(li)))

# li = [7,3,1,2]
# print("id outside before passing to function: " + str(id(li)))
# check(li)
# print("number after passing to function: " + str(li))
# print("id outside after passing to function " + str(id(li)))


# // pass any number of arguements to a function
# //become a tuple
# def sum(*args):
#     sum1 = 0
#     for ele in args:
#         sum1 += ele
#     print(sum1)
# sum(2,3,4,5,6,77,6)


# //Key worded arguements
# //becomes a dictionary
# def func(**kwargs):
#     for key,value in kwargs.items():
#         print(kwargs)

# func(name = "Ashish", batch = "Samurai", doingGood = True)

# li = (7,3,1,2)
# print(id(li), id(li[0]))
# li = li + (4,)
# print(id(li), id(li[0]))

# num = 5
# print(id(num))
# num = 6
# print(id(num))

# x = "boolean"
# y = "boolean"
# print(x is y)

# x = 10
# y = x
# x = x + 1

# print(id(x), id(y))

m = list([1,2,3])
n = m
m.pop()
print(n,m,id(m), id(n))