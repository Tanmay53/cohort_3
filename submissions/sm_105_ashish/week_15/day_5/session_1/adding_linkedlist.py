class Node:
    def __init__(self,data):
        self.data = data
        self.next = None

class Linked_list:
    def __init__(self):
        self.head = None

    def push(self,new_data):
        new_node = Node(new_data)
        if self.head:
            new_node.next = self.head
            self.head = new_node
        else:
            self.head = new_node
    
    def display(self):
        temp = self.head
        if temp:
            while temp:
                print(temp.data)
                temp = temp.next
        else:
            print('Empty linked list')

    def add_two_lists(self,first,second):
        

list1 = Linked_list()
list1.push(3)
list1.push(6)
list1.push(5)

list2 = Linked_list()
list2.push(2)
list2.push(4)
list2.push(8)

list1.display()
list2.display()