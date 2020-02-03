class ShoppingCart:
    items_present_in_cart = {
        
    }

    def __init__(self, customer_id):
        self.customer_id = customer_id

    def add_item(self, product, price):
        if product not in self.items_present_in_cart:
            self.items_present_in_cart[product] = price
            print(product + ' added to your shopping cart.')
        else:
            print(product + ' is already present in your shopping cart.')

    def remove_item(self, product):
        if product in self.items_present_in_cart:
            self.items_present_in_cart.pop(product)
            print(product + ' is being removed from your shopping cart.')
        else:
            print(product + ' not present in your shopping cart.')

my_shopping_cart = ShoppingCart('CHIN_12')
my_shopping_cart.add_item('Python', 900)
my_shopping_cart.add_item('Python', 1000)
my_shopping_cart.add_item('King Cobra', 2000)
my_shopping_cart.remove_item('Rustle Viper')
my_shopping_cart.add_item('Rustle Viper', 1900)
my_shopping_cart.remove_item('Rustle Viper')