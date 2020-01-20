class Bike:
    condition = 'New'
    def __init__(self, model, color, average):
        self.model = model
        self.color = color
        self.average = average

    def display_bike(self):
        return "This is a {} {} with {} average.".format(self.model, self.color, self.average)

my_bike = Bike('Pulsar', ' black', '40kmpl')

print(my_bike.color)
print(my_bike.display_bike())