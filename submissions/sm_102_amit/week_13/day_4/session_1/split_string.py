# Given a string and a split character generate a list of strings from the given string, splitting at the occurence of each split character
string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
splitter = " "
words = []
subString = ""
for x in string:
    if x == splitter:
        words.append(subString)
        subString = ""
    else:
        subString += x
if subString:
    words.append(subString)
print(words)
