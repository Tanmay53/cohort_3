class Node:
    def __init__(self,data):
        self.data = data
        self.next = None
class Linked_list:
    def __init__(self):
        self.head = None
    
    def display(self):
        temp = self.head
        if temp:
            while temp:
                print(temp.data)
                temp = temp.next
    def delete_node(self,node):
        node.data = node.next.data
        temp = node.next
        node.next = temp.next
        temp = None

def merge(head_a,head_b):
    itr1 = head_a
    itr2 = head_b
    itr = None
    while itr1 is not None and itr2 is not None:
        if itr1.data < itr2.data:
            if itr is not None:
                itr.next = itr1
            itr = itr1
            itr1 = itr1.next
        else:
            if itr is not None:
                itr.next = itr2
            itr = itr2
            itr2 = itr2.next
    if itr1 is not None:
        itr.next = itr1
    if itr2 is not None:
        itr.next = itr2
    return head_a.data if head_a.data < head_b.data else head_b.data




list1 = Linked_list()
list1.head =  Node(2)
a1 = Node(4)
a2 = Node(6)
a3 = Node(8)
list1.head.next = a1
a1.next = a2
a2.next = a3
a3.next = None


list2 = Linked_list()
list2.head =  Node(1)
b1 = Node(3)
b2 = Node(5)
b3 = Node(7)
b4 = Node(9)
list2.head.next = b1
b1.next = b2
b2.next = b3
b3.next = b4
b4.next = None

# list1.display()
list2.display()
list1.delete_node(b3)
list2.display()



# print(merge(list1.head,list2.head))
