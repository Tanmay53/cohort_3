class ShoppingCart:
    items_present_in_cart = {
    
    }

    def add_item(self, product, price):
        if product in self.items_present_in_cart:
            print(product+"is already present")
        else:
            self.items_present_in_cart[product] = price
            print(product + " Added")

    def remove_item(self, product):
        if product in self.items_present_in_cart:
            self.items_present_in_cart.pop(product)
            print(product + " is removed")
        else:
            print(product + " Not present in cart")

my_cart  = ShoppingCart()
my_cart.add_item("Burger", "40")
my_cart.remove_item('Burger')
my_cart.remove_item("Burger")
