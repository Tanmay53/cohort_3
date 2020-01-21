string = input("Enter list elements separated by comma(,): ").split(",")
char = input("Enter word to join the list: ")

joined = ""

for index, val in enumerate(string):
    joined += val

    if index != len(string)-1:
        joined += char

print(joined)
