class Shopping_cart:
    items_present_in_cart = {}
    def __init__(self,customer_id):
        self.customer_id = customer_id

    def add_item(self,product,price):
        if product in self.items_present_in_cart:
            return product+ ' is already available in cart'
        else:
            self.items_present_in_cart[product] = price
            return product+' added in your cart'
    def remove_item(self,product):
        if product in self.items_present_in_cart:
            self.items_present_in_cart.pop(product)
            return product+' removed from your cart'
        else:
            return product+' is not present in your cart'

My_cart = Shopping_cart('101')

print(My_cart.add_item("book",500))
print(My_cart.add_item("book",500))
print(My_cart.remove_item("book"))
print(My_cart.remove_item("book"))



