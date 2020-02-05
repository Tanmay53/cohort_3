
class ShoppingCart:
    items_present_in_cart = {}

    def __init__(self, customer_id):
        self.customer_id = customer_id

    def add_item(self, item_name, price):
        if item_name not in self.items_present_in_cart:
            self.items_present_in_cart[item_name] = price
            print(item_name + " Added")
        else:
            print(item_name + " is already present")

    def remove_item(self, item_name):
        if item_name in self.items_present_in_cart:
            self.items_present_in_cart.pop(item_name)
            print("Removed " + item_name)
        else:
            print(item_name + " not present in cart")


print("please enter customer id")
customer_id = input()
print("please enter name")
input_name = input()
print("please enter price")
input_price = input()

my_cart = ShoppingCart(customer_id)
my_cart.add_item(input_name, input_price)
print(my_cart.items_present_in_cart)

print("enter removing item name")
remove_name = input()
my_cart.remove_item(remove_name)
print(my_cart.items_present_in_cart)
