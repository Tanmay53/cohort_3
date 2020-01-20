class ShoppingCart:
    items_present_in_cart = {}

    def __init__(self, customer_id):
        self.customer_id = customer_id

    def add_item(self, product, price):
        available = False
        for pdt in self.items_present_in_cart:
            if pdt == product:
                available = True

        if not available:
            self.items_present_in_cart[product]=price
            print(f'{product} Added')
        else:
            print("Product is already present")

    def remove_item(self, product):
        available = False
        for pdt in self.items_present_in_cart:
            if pdt == product:
                available = True

        if available:
            self.items_present_in_cart.pop(product)
            print(f'{product} Removed Successfully')
        else:
            print("Product is not present in Cart")


'''test case'''
ayaanShop = ShoppingCart(3)

ayaanShop.add_item("popcorn", 34)

ayaanShop.add_item("Coke", 94)

ayaanShop.add_item("Coke", 34)

print(ayaanShop.items_present_in_cart)

ayaanShop.remove_item("soomthi")

print(ayaanShop.items_present_in_cart)
