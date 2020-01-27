class ShoppingCart:
    def __init__(self, customer_id):
        self.items_present_in_cart = {}

    def remove_item(self, product):
        product = product.lower()

        if product in self.items_present_in_cart:
            del self.items_present_in_cart[product]
            print(f'{product} Removed.')
        else:
            print(f'{product} not present in cart.')

    def add_item(self, product, price):
        product = product.lower()

        if product in self.items_present_in_cart:
            print(f'{product} is already present')
        else:
            self.items_present_in_cart[product] = price
            print(f'{product} Added')

my_cart = ShoppingCart(1)

my_cart.add_item('Apple', 100)
my_cart.add_item('Banana', 69)
my_cart.add_item('Apple', 9)

my_cart.remove_item('apple')

print(my_cart.items_present_in_cart)