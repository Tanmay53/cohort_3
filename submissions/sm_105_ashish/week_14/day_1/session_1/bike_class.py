class Bike:
    condition = "new"
    def __init__(self,model,color,average):
        self.model = model
        self.color = color
        self.average = average

    def display_bike(self):
        return 'This '+self.color+' '+self.model +' averages '+self.average

my_bike = Bike("R15","Green","80kmph")

print(my_bike.color)
print(my_bike.display_bike())