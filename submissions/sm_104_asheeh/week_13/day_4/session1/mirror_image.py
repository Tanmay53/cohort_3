phrase = "Ay-****zB"
mirrorImage = str()
capCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
smallCase = "abcdefghijklmnopqrstuvwxyz"

for char in phrase:
    if char in capCase:
        mirrorImage += capCase[25 - capCase.find(char)]
    elif char in smallCase:
        mirrorImage += smallCase[25 - smallCase.find(char)]
    else:
        mirrorImage += char

print(mirrorImage)
             