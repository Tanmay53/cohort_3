class ShoppingCart:
    items_present_in_cart={}

    def __init__ (self,customer_id):
        self.customer_id=customer_id

    # add items to cart
    def add_item(self, product,price):
        if product in self.items_present_in_cart:
            print(product+" is already present")
        else:
            self.items_present_in_cart[product] = price
    
    #remove item form cart
    def remove_item(self,product):
        if product in self.items_present_in_cart:
            del self.items_present_in_cart[product]
            print(product + " deleted successfully")
        else:
            print(product + "not present in cart!")

# operations on cart
my_cart = ShoppingCart("kol1")
my_cart.add_item("Milk","40")
my_cart.add_item("Rice","100")
my_cart.add_item("Dry fruits","400")
my_cart.add_item("Jaggery","80")
print(my_cart.items_present_in_cart)
my_cart.remove_item("Dry fruits")
print(my_cart.items_present_in_cart)
