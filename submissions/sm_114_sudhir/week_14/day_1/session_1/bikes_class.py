class Bike:
    condition = "new"
    def __init__(self, model, color, average):
        self.model = model
        self.color = color
        self.average = average

    def display_bike(self):
        print("This is a "+self.color+" "+self.model+" with "+self.average+" average")

my_bike = Bike("Yamaha R15", "Blue", "35kmpl")
my_bike.display_bike()
print(my_bike.color)