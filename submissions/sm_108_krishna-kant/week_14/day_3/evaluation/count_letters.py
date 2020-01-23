def count_letters(string):
    counts = dict()
    for words in string:
        for i in words :
            if i is not " ":
                if i in counts:
                    counts[i] = counts[i] + 1 
                else :
                    counts[i] = 1
    print(f"Given List : {string}")
    for k in counts:
        print(f"{k} - {counts[k]}")

string = input("Enter words seperated by spaces: ")
count_letters(string.split())
