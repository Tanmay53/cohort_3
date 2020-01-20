class Rectangle:
    number_of_sides = 4

    def __init__(self, angle1, angle2, angle3, angle4):
        self.angle1 = angle1
        self.angle2 = angle2
        self.angle3 = angle3
        self.angle4 = angle4

    def check_angles(self):
        sum = 0
        sum = self.angle1 + self.angle2 + self.angle3 + self.angle4
        if sum == 360:
            print("True")
        else:
            print("False")


my_rectangle = Rectangle(90, 90, 90, 90)
my_rectangle.check_angles()


class Square(Rectangle):
    angle = 90

    def __init__(self):
        self.angle1 = self.angle
        self.angle2 = self.angle
        self.angle3 = self.angle
        self.angle4 = self.angle


my_square = Square()
my_square.check_angles()
