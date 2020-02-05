class Bike:
    condition = "New"

    def __init__(self, model, color, average):
        self.model = model
        self.color = color
        self.average = average

    def displayBike(self):
        phrase = "This is a " + self.color + " " + self.model + " with " + self.average + " average."
        return phrase

myBike = Bike("Apache", "Black", "30 Kmpl")
print(myBike.color)
print(myBike.displayBike())