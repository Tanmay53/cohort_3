class Car:
    # condition = "New Car"    # <---declaration of Public member / properties   # properties / member--public, protected, private
    # _condition = "New Car"     # <---declaration of Protected member / properties
    __condition = "New Car"     # <---declaration of Private member / properties

    wheels = "4"

    # how we instantiate an object of a car(like constructor function in javascript)
    def __init__(self, model, color, mileage):       
        self.model = model
        self.color = color
        self.mileage = mileage

    def description(self):
        toPrint = "It's a " + self.condition + " which is a " + self.model + " and it's color is " + self.color + " which gives a mileage of " + self.mileage
        print(toPrint)

    def driveCar(self):
        self.condition = "Used Car"

# inheritance
class ElectricCar(Car):     # class ElectricCar extends class Car

    def __init__(self, model, color, mileage, batteryType):
        self.model = model
        self.color = color
        self.mileage = mileage
        self.batteryType = batteryType

    def description(self):
        print("Ashish")

friendsCar = Car("Bugatti Chiron", "Navy blue", 8)
print(friendsCar.condition)
print(friendsCar._condition)    #name mangling

# method overriding

elonsCar = ElectricCar("Tesla Model X", "Black", "21", "Lithium")
# elonsCar.description()

# print(elonsCar.condition)
# elonsCar.driveCar()
# print(elonsCar.condition)

# apsCar = Car("buggati chiron", "blue", "8kmpl")    # creating an instance of class car

# print(apsCar.mileage) # this is how we fetch properties related to object.

# print(apsCar.condition)
# apsCar.driveCar()
# print(apsCar.condition)
# apsCar.description()


# classes and objects 
# objects are instance of class
# properties and methods
# inheritance

# Abstraction --> hiding the actual implementation from the user. e.g. inbuilt method "string.reverse()"
# Encapsulation --> hiding the member variables. e.g. every class is encapsulated with two things - 1. Variable 2. Methods 