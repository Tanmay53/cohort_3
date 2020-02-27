class Bike:
    condition="New"
    def __init__(self,model,color,average):
        self.model=model
        self.color=color
        self.average=average

    def display_bike(self):
        print("This is a "+self.color+" color "+self.model+" model with "+self.average+" average")    

my_bike=Bike("Getz","Red","30kmpl")
my_bike.display_bike()