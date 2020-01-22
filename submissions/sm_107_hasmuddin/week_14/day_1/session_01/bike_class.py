class Bike:
    condition = "new"

    def __init__(self, model, color, average):
        self.model = model
        self.color = color
        self.average = average

    def display_bike(self):
        return f'This is a {self.color} {self.model} with {self.average} average'


my_bike = Bike("Honda", "Red", 52)
print(my_bike.color)
print(my_bike.display_bike())