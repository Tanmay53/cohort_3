class Shopping_cart:
    items_present_in_cart = {}

    def __init__(self, customer_id):
        self.customer_id = customer_id

    def add_item(self, product, price):
        if product in self.items_present_in_cart:
            print('{} is already present'.format(product))
        else:
            self.items_present_in_cart[product] = price
            print('{} added'.format(product))

    def remove_item(self, product):
        if product in self.items_present_in_cart:
            self.items_present_in_cart.pop(product)
            print('{} removed'.format(product))
        else:
            print('{} not present in cart'.format(product))
    

cart = Shopping_cart(100)
cart.add_item('watch', 100)
cart.add_item('bottle', 50)
cart.add_item('bottle', 50)
cart.remove_item('bottle')
cart.remove_item('bottle')




