class Bike:
    condition = "New"

    def __init__(self, model, color, average):
        self.model = model
        self.color = color
        self.average = average

    def display_bike(self):
        print("This is a " + self.color + " " + self.model + " with " + str(self.average) + " average")


my_bike = Bike("Hero Splendor", "white", 50)
print(my_bike.color)
my_bike.display_bike()
