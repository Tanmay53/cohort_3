class ShoppingCart:
    items_present_in_cart = {}

    def __init__(self,customer_id):
        self.customer_id = customer_id
    
    def add_item(self, product, price):
        if product in self.items_present_in_cart:
            print(product + " is already Present")
        else: 
            self.items_present_in_cart[product] = price
            print(product + " Added")
    def remove_item(self, product):
        if product in self.items_present_in_cart:
            self.items_present_in_cart.pop(product)
            print(product)
        else:
            print(product + " is not present")

shoppingCart = ShoppingCart("1")
shoppingCart.add_item("Car",20000)
shoppingCart.add_item("Car",20000)
shoppingCart.remove_item("Car")
shoppingCart.remove_item("Car")