class Rectangle:
    number_of_sides = 4

    def __init__(self,angle1,angle2,angle3,angle4):
        self.angle1 = angle1
        self.angle2 = angle2
        self.angle3 = angle3
        self.angle4 = angle4

    def check_angles(self):
        angle_sum = self.angle1 + self.angle2 + self.angle3 + self.angle4
        print(angle_sum)
        if angle_sum == 360:
            return True
        else:
            return False

class Square(Rectangle):
    angle = 90

    def __init__(self):
        self.angle1 = self.angle
        self.angle2 = self.angle
        self.angle3 = self.angle
        self.angle4 = self.angle


my_rectangle = Rectangle(60,120,50,120)
print(my_rectangle.check_angles())

my_square = Square()
print(my_square.check_angles())