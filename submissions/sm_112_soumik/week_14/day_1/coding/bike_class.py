class Bike():
    condition = "new"

    def __init__(self, model, color, average):
        self.model = model
        self.color = color
        self.average = average

    def description(self):
        print(
            f'car is {self.model} and color is {self.color} and avg is {self.average}')


new_bike = Bike("Sidan", "Black", "16")
new_bike.description()
