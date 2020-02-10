userInput=input("type a string here : ").lower()
count=0
for x in userInput:
    if x == "a" or x == "e" or x == "i" or x == "o" or x == "u":
        count=count+1

print("No of vowels : ",count)