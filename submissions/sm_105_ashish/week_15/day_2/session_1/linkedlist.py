class Node:
    def __init__(self,data):
        self.data = data
        self.next = None

class Linked_list:
    def __init__(self):
        self.head = None

    def display(self):
        cur = self.head
        while(cur):
            print(cur.data)
            cur = cur.next

my_list = Linked_list()

my_list.head = Node(1)

second = Node(2)
third = Node(3)
print(second.next,third.next)

my_list.head.next = second
second.next = third
print(second.next.data,third.next)

my_list.display()
