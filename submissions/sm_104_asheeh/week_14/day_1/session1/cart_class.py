class ShoppingCart:
    items_present_in_cart = dict()

    def __init__(self, customer_id):
        self.customer_id = customer_id

    def add_item(self, product, price):
        if product in self.items_present_in_cart:
            return product + " is already present."
        else:
            self.items_present_in_cart[product] = price
            return product + " Added "

    def remove_item(self, product):
        if product in self.items_present_in_cart:
            del self.items_present_in_cart[product]
            return product + " removed from the cart."
        else:
            return product + " not present in cart."
        return

    def display(self):
        print("Customer id is: " + self.customer_id, self.items_present_in_cart)

my_cart = ShoppingCart("123")
# my_cart.display()
print(my_cart.add_item("Apple", "123"))
# my_cart.display()
print(my_cart.add_item("Apple", "123"))
print(my_cart.add_item("Banana", "1263"))
print(my_cart.add_item("pomegranate", "1323"))
print(my_cart.remove_item("pomegranate"))
print(my_cart.remove_item("pomegranate"))
print(my_cart.items_present_in_cart)

# my_cart.display()

