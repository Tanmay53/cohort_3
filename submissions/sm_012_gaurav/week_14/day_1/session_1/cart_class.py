class ShoppingCart:

    items_present_in_cart = {}

    def __init__(self, customer_id):
        self.customer_id = customer_id
    
    def add_item(self, product, price):
        if product in self.items_present_in_cart:
            print(product + " is already present")
        else:
            self.items_present_in_cart[product] = price
            print(product+" Added")
    def remove_item(self, product):
        if product not in self.items_present_in_cart:
            print(product + " not present in cart")
        else:
            del self.items_present_in_cart[product]
            print(self.items_present_in_cart)

my_cart = ShoppingCart(122)
my_cart.add_item("Apple", 58)
my_cart.add_item("Apple", 59)
my_cart.add_item("Orange", 89)
my_cart.remove_item("App")