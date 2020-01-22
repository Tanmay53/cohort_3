class Bike:
    def __init__(self, model, color, average):
        self.condition = 'new'
        self.model = model
        self.color = color
        self.average = average

    def display_bike(self):
        return f'This is a {self.color} {self.model} with {self.average} average.'

my_bike = Bike('Splendor', 'Red', '60kmpl')

print(my_bike.color)
print(my_bike.display_bike())