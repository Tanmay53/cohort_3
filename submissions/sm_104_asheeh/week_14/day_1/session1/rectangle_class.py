class Rectangle:
    numberOfSides = "4"

    def __init__(self, angle1, angle2, angle3, angle4):
        self.angle1 = angle1
        self.angle2 = angle2
        self.angle3 = angle3
        self.angle4 = angle4

    def checkAngles(self):
        anglesSum = self.angle1 + self.angle2 + self.angle3 + self.angle4
        if anglesSum == 360:
            return True
        else:
            return False


myRectangle = Rectangle(90, 30, 60, 90)
print(myRectangle.checkAngles())

# inheritance
class Square(Rectangle):
    angle = 90

    def __init__(self, angle):
        self.angle1 = self.angle
        self.angle2 = self.angle
        self.angle3 = self.angle
        self.angle4 = self.angle


mySquare = Square()
print(mySquare.checkAngles())

