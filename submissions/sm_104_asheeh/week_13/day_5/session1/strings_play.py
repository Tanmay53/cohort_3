def camel_case(phr):
    convertedPhrase = str()
    
    for i in range(0, len(phr), 1):
        if phr[i-1] == " ":
            convertedPhrase += phr[i].upper()
        elif phr[i] == " ":
            continue;
        else:
            convertedPhrase += phr[i].lower()

    return convertedPhrase

def snake_case(phr):
    convertedPhrase = str()
    
    for i in range(0, len(phr), 1):
        if phr[i] == " ":
            convertedPhrase += "_"
        else:
            convertedPhrase += phr[i].lower()

    return convertedPhrase

def hyphen_case(phr):
    convertedPhrase = str()

    for i in range(0, len(phr), 1):
        if phr[i] == " ":
            convertedPhrase += "-"
        else:
            convertedPhrase += phr[i].lower()
    
    return convertedPhrase

phrase = "Masai School is a twenty first century coding school"
print("Camel case: ",camel_case(phrase))
print("Snake case: ",snake_case(phrase))
print("Hyphen case: ",hyphen_case(phrase))