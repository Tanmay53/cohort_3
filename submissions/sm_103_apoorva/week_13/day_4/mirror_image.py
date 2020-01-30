string = input("Enter the string: ")
# print(string)
out = ""
small = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
caps = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
for i in string:
    if i >= "A" and i <= "Z":
        if i in caps:
            out += caps[25-caps.index(i)]
    else:
        if i in small:
            out += small[25-small.index(i)]
print(out)
