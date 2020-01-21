def pyramid(level):
    pos=0
    row=0
    stars=""
    for i in range(level,0,-1):
        row+=1
        numStar=0
        pos=i
        for col in range(0,level*2+1):
            if col == pos and numStar<row:
                stars+='0'
                numStar+=1
                if row !=1:
                    pos=pos+2
            else:
                stars+= '*'
        print(stars)
        stars=""

def inverse(level):
    pos=0
    row=level+1
    stars=""
    for i in range(1,level+1):
        row-=1
        pos=i
        starNum=0
        for col in range(0,level*2+1):
            if col == pos and starNum<row:
                stars+="0"
                starNum+=1
                if row !=1:
                    pos += 2
            else:
                stars+="*"
        print(stars)
        stars=""

def rhombus(level):
    pyramid(level)
    inverse(level)

level= int(input("Enter level: "))
print("pyramid")
pyramid(level)
print("inverse pyramid")
inverse(level)
print("Rhombus")
rhombus(level)