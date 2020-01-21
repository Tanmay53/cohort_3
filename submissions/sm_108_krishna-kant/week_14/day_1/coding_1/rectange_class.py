class Rectangle:
    
    number_of_sides = 4

    def __init__(self, angle1, angle2, angle3, angle4):
        self.angle1 = angle1
        self.angle2 = angle2
        self.angle3 = angle3
        self.angle4 = angle4
    def check_angles(self):
        self.__sum_of_angle = self.angle1 + self.angle2 + self.angle3 + self.angle4
        if self.__sum_of_angle == 360:
            return True
        else:
            return False

class Square(Rectangle):
    __angle = 90
    def __init__(self):
        self.angle1 = self.__angle
        self.angle2 = self.__angle
        self.angle3 = self.__angle
        self.angle4 = self.__angle
        

my_rectangle = Rectangle(90,30,60,90)
my_square = Square()
print(my_square.check_angles())
print(my_rectangle.check_angles())
