class ShoppingCart:

    items_present_in_cart = {}

    def __init__(self, customer_id):
        self.customer_id = customer_id

    def add_item(self, name, price):
        if name not in self.items_present_in_cart:
            self.items_present_in_cart[name] = price
            print(name, "Added")
        else:
            print(name, " already present")

    def remove_item(self, name, price):
        if name in self.items_present_in_cart:
            del self.items_present_in_cart[name]
            print(name, " Removed")
        else:
            print(name, " not present")


my_cart = ShoppingCart(1)
my_cart.add_item("Shirt", 90)
my_cart.remove_item("Shirt", 90)
