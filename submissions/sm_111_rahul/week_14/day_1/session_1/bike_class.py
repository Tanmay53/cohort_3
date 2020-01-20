class Bike:
    condition = "new"
    def __init__(self, model, color, average):
        self.model = model
        self.color = color
        self.average = average
    def display_bike(self):
        print("This is a " + str(self.color) +" "+ str(self.model) + " with " + str(self.average) + "kmpl average.")

my_bike = Bike("pulsar280", "Red", 25)
my_bike.display_bike()
    