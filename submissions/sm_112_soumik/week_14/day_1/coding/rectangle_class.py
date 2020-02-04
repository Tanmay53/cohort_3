class Rectangle():
    number_of_side = 4

    def __init__(self, angle1, angle2, angle3, angle4):
        self.angle1 = angle1
        self.angle2 = angle2
        self.angle3 = angle3
        self.angle4 = angle4

    def check_angles(self):
        if self.angle1 + self.angle2 + self.angle3 + self.angle4 == 360:
            return True
        else:
            return False


my_rectangle = Rectangle(10, 200, 30, 30)


class Square(Rectangle):
    angle = 90

    def __init__(self):
        angle1 = self.angle
        angle2 = self.angle
        angle3 = self.angle
        angle4 = self.angle


my_square = Square()
print(my_square.angle)
