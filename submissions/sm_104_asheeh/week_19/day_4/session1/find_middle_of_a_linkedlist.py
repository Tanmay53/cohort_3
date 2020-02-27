class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None

    def mid_of_list(self):
        slow_pointer = self.head
        fast_pointer = self.head
        if self.head:
            while fast_pointer and fast_pointer.next:
                fast_pointer = fast_pointer.next.next
                slow_pointer = slow_pointer.next
        return slow_pointer.data

    def push(self, new_data):
        new_node = Node(new_data)
        new_node.next = self.head
        self.head = new_node

llist = LinkedList()
llist.push(1)
llist.push(2)
llist.push(56)
llist.push(55)
llist.push(4)
llist.push(5)
print(llist.mid_of_list())
