class ShoppingCart:
    items_present_in_cart = {}

    def __init__(self,customer_id):
        self.customer_id = customer_id

    def add_item(self,product,price):
        self.product = product
        self.price = price
        if product not in self.items_present_in_cart:
            self.items_present_in_cart[product] = price
            print(product+ " Added")
        else:
            print(product+ " is already present")

    def remove_item(self,product):
        self.product = product
        if product in self.items_present_in_cart:
            self.items_present_in_cart.pop(product)
            print(product+ " Removed")
        else:
            print(product+ " not present in cart")

peter_england_shop = ShoppingCart(1)

peter_england_shop.add_item("Jeans-32",1199)
print(peter_england_shop.items_present_in_cart)
peter_england_shop.add_item("Jeans-32",1199)
print(peter_england_shop.items_present_in_cart)
peter_england_shop.remove_item("Jeans-32")
print(peter_england_shop.items_present_in_cart)
