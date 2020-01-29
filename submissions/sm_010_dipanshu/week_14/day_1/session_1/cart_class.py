class ShoppingCart:
    items_present_in_cart = {}

    def __init__(self, customer_id):
        self.customer_id = customer_id

    def add_item(self, product, price):
        if product not in self.items_present_in_cart:
            self.items_present_in_cart[product] = price
            print(product + " added")
        else:
            print(product + " is already present")

    def remove_item(self, product):
        if product in self.items_present_in_cart:
            del (self.items_present_in_cart[product])
            print(product + " removed")
        else:
            print(product + " not present in cart")


cart = ShoppingCart(1234)

cart.add_item("maggi", 10)
cart.add_item("maggi", 10)
cart.remove_item("maggi")
cart.remove_item("maggi")
