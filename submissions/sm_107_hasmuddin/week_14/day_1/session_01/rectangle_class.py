class Rectangle:
    number_of_sides = 4

    def __init__(self, angle1, angle2, angle3, angle4):
        self.angle1 = angle1
        self.angle2 = angle2
        self.angle3 = angle3
        self.angle4 = angle4

    def check_angles(self):
        sum_of_angles = int(self.angle1) + int(self.angle2) + int(self.angle3) + int(self.angle4)

        if sum_of_angles == 360:
            return True

        else:
            return False


my_rectangle = Rectangle(90, 30, 60, 90)
print(my_rectangle.check_angles())


class Square(Rectangle):
    angle = 90

    def __init__(self, angle1=angle, angle2=angle, angle3=angle, angle4=angle):
        super().__init__(angle1, angle2, angle3, angle4)



checkSquare= Square()
print(checkSquare.check_angles())