class Node:
    # constructor to initialize the node object
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    # function to make the empty linkedlist
    def __init__(self):
        self.head = None

    # function to insert the node at 
    # the head of the linkedlist
    def push(self, new_data):
        new_node = Node(new_data)
        new_node.next = self.head
        self.head = new_node

    # function to print the linkedlist
    def printList(self):
        temp = self.head
        while temp:
            print(temp.data)
            temp = temp.next

    def rotate(self, k):
        if k == 0:
            return
        current = self.head
        count = 1
        while current and count < k: # <------
            current = current.next
            count += 1
        
        # if current is None, k is greater
        #  than or equal to count of nodes 
        # in linked list. Don't change the 
        # list in this case.
        if current is None:
            return

        # current points to kth node  
        kthNode = current
        while current.next:
            current = current.next

        current.next = self.head
        self.head = kthNode.next
        kthNode.next = None

llist = LinkedList()
# llist.push(60)
# llist.push(50)

for i in range(60, 0, -10):
    llist.push(i)

print('given linkedlist: ')
llist.printList()
llist.rotate(3)
print('rotated list: ')
llist.printList()



