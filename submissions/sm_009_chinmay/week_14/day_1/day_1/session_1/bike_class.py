class Bike:
    condition = 'new'

    def __init__(self, model, color, average):
        self.model = model
        self.color = color
        self.average = average

    def display_bike(self):
        to_print = 'This is a ' + self.color + ' ' + self.model + ' with ' + self.average + ' average.'
        return to_print

my_bike = Bike('Avenger 220', 'Ebony Black', '40 kmpl')
print(my_bike.color)
print(my_bike.display_bike())