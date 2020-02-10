class ShoppingCart():
    items_present_in_cart = {}

    def __init__(self, customer_id):
        self.customer_id = customer_id

    def add_item(self, product, price):
        if product in self.items_present_in_cart:
            print(product, " is already present !")
        else:
            self.items_present_in_cart[product] = price
            print(product, "added to cart")

    def delete_item(self, product):
        if product in self.items_present_in_cart:
            del self.items_present_in_cart[product]
            print(product, " removed from cart !")
        else:
            self.items_present_in_cart[product] = price
            print(product, "not present in cart")


new_item = ShoppingCart("001")
new_item.add_item("eggs", "100")
new_item.add_item("penuts", "300")
new_item.add_item("eggs", "100")
new_item.delete_item("eggs")
new_item.add_item("eggs", "50")
