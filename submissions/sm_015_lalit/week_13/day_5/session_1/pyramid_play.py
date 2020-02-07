inputx = input("Provide input for the pattern here : ")
try:
    inputx = int(inputx)
except ValueError:
    print("Wrong input detected, run program again with right input.")
else:
    if inputx > 2 and inputx < 74:
        print("1. Pyramid")
        print("2. Inverse Pyramid")
        print("3. Rhombus")
        inputSelect = input(
            "Choose your desired pattern from above list, eg: 1 or 2 : ")
        try:
            inputSelect = int(inputSelect)
        except ValueError:
            print("Wrong option provided, run program again with right input.")
        else:
            def pyramid(inputx):
                temp = ""
                for i in range(inputx):
                    for j in range(inputx-i):
                        temp += "."
                    for k in range(i+1):
                        if k == i:
                            temp += "O"
                        else:
                            temp += "O."
                    for f in range(inputx-i):
                        temp += "."
                    temp += "\n"
                print(temp)

            def inversePyramid(inputx):
                temp = ""
                for i in range(inputx, -1, -1):
                    for j in range(inputx+1-i):
                        temp += "."
                    for k in range(i+1):
                        if k == i:
                            temp += "O"
                        else:
                            temp += "O."
                    for f in range(inputx+1-i):
                        temp += "."
                    temp += "\n"
                print(temp)

            def rhombus(inputx):
                temp = ""
                for i in range(inputx):
                    for j in range(inputx-i):
                        temp += "."
                    for k in range(i+1):
                        if k == i:
                            temp += "O"
                        else:
                            temp += "O."
                    for f in range(inputx-i):
                        temp += "."
                    temp += "\n"
                temp2 = ""
                for i in range(inputx-2, -1, -1):
                    for j in range(inputx-i):
                        temp2 += "."
                    for k in range(i+1):
                        if k == i:
                            temp2 += "O"
                        else:
                            temp2 += "O."
                    for f in range(inputx-i):
                        temp2 += "."
                    temp2 += "\n"
                print(temp+temp2)

            if inputSelect == 1:
                pyramid(inputx)
            elif inputSelect == 2:
                inversePyramid(inputx)
            elif inputSelect == 3:
                rhombus(inputx)
            else:
                print("Incorrect input detected, run program again with right input.")
    else:
        print("Input provided is too low/high for the pattern to display on this screen.")
