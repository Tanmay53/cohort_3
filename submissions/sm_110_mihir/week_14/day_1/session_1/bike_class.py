class Bike:
    condition = "new"

    def __init__(self, model,color, average):
        self.model=model
        self.color = color
        self.average = color
    
    def display_bike(self):
        print ("This is a "+self.color+" "+self.model+ " with " +self.average+" average")

my_bike = Bike("Yamaha FZS","Yellow","26kmpl")
print(my_bike.color)
my_bike.display_bike()