# Print the mirror image of the given string AyzB should become ZbaY

lowercase_list = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
uppercase_list = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']

input_string = 'AyzB'
mirror_string = ''

for i in (input_string):
    for j in range(len(lowercase_list)):
        if lowercase_list[j] == i:
            mirror_string = mirror_string + lowercase_list[25-j]
        elif uppercase_list[j] == i:
            mirror_string = mirror_string + uppercase_list[25-j]
print(mirror_string)