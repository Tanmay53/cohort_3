import string
# generate list of alphabets
test_lowercase=list(string.ascii_lowercase)
test_uppercase=list(string.ascii_uppercase)

# mirror image of AyzB should become ZbaY

input="AyzB"
result=""
for char in input:
    if char in test_lowercase:
        result+=test_lowercase[25-test_lowercase.index(char)]
    else:
        result+=test_uppercase[25-test_uppercase.index(char)]
print(result)



