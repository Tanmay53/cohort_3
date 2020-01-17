# Print the given string in reverse order
string = input("Enter string: ")
rev = ""
for i in range(len(string)-1, -1, -1):
    rev += string[i]
print(rev)
