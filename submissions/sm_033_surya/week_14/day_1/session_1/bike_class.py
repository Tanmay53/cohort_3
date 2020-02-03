class Bike:
    condition = "New"

    def __init__(self, model, color, average):
        self.model = model
        self.color = color
        self.average = average

    def display_bike(self):
        print("This is a "+self.color+" "+self.model +
              " with " + self.average + " average.")


my_bike = Bike("Rx_100", "Red", "300")
print(my_bike.color)
my_bike.display_bike()
