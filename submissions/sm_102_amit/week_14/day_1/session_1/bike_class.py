class Bike:
    condition = "New"

    def __init__(self, model, color, average):
        self.model = model
        self.color = color
        self.average = average

    def display_bike(self):
        return "This is a " + self.color + " " + self.model + " with " + self.average + " average."


my_bike = Bike("Ducati-900", "Blue", "22 kmpl")
print(my_bike.color)
print(my_bike.display_bike())
