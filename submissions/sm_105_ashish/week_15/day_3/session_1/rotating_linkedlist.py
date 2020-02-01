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
                print(temp.data, end = ' ')
                temp = temp.next
        else:
            print('Empty linked list')

    def rotate(self,k):
        new_head = self.head
        tail = self.head
        count = 1
        while(count < k+1):
            count += 1
            tail = new_head
            new_head = new_head.next
        temp = self.head
        while(temp.next):
            temp = temp.next
        temp.next = self.head
        self.head = new_head
        tail.next = None





my_list = Linked_list()
my_list.push(0)
my_list.push(1)
my_list.push(2)
my_list.push(3)
my_list.push(4)
my_list.push(5)

my_list.rotate(2)
my_list.display()