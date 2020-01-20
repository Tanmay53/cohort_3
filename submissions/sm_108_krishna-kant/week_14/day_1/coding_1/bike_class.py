class Bike:
    condition = "new"

    def __init__(self, model, color,average):
        self.model = model
        self.color = color
        self.average = average

    def display_bike(self):
        self.display = "This is a "+ self.color +" "+ self.model + " with " + str(self.average) + " average."
        return self.display
my_bike = Bike("2009 Harley","Black",20)
print(my_bike.color)
print(my_bike.display_bike())