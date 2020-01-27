class Bike:

    condition = "new"

    def __init__(self, model, color, average):
        self.model = model
        self.color = color
        self.average = average
    
    def display_bike(self):
        to_display = "This is a " + self.color + " " + self.model + " with " + str(self.average) + " average."
        print(to_display)

my_bike = Bike("Hayabusa", "Black", 5)
my_bike.display_bike()