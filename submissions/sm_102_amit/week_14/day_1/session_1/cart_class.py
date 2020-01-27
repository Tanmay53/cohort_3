class ShoppingCart:
    items_present_in_cart = {
        "Product 1": "200",
        "Product 2": "300",
        "Product 3": "400"
    }

    def __init__(self, customer_id):
        self.customer_id = customer_id

    def add_item(self, name, price):
        if name in self.items_present_in_cart:
            return name + " is already present."
        else:
            self.items_present_in_cart[name] = price
            return name + " added."

    def remove_item(self, name):
        if name in self.items_present_in_cart:
            self.items_present_in_cart.pop(name)
            return name + " removed."
        else:
            return name + " not present in cart."


shopping_cart = ShoppingCart(101)
print(shopping_cart.add_item("Product 4", "500"))
print(shopping_cart.add_item("Product 4", "600"))
print(shopping_cart.remove_item("Product 1"))
print(shopping_cart.remove_item("Product 1"))
