userInput=input("type a string here : ").lower()
count=0
for x in userInput:
    if x != "a" and x != "e" and x != "i" and x != "o" and x != "u":
        count=count+1

print("No of consonants : ",count)