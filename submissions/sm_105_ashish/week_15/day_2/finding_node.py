class Node:
    def __init__(self,data):
        self.data = data
        self.next = None

class Linked_list:
    def __init__(self):
        self.head = None
    
    def display(self):
        temp = self.head
        if(temp):
            while(temp):
                print(temp.data)
                temp = temp.next
        else:
            print('Linked list is empty')
        
    # defining a method to get n'th node of a linked list

    def nth_node(self,index):
        temp = self.head
        count = 0
        while(count < index):
            count +=1
            temp = temp.next
        return temp.data

# defining  a method to print the nth node from the last index 

    def last_nth_node(self ,index):
        temp = self.head
        length = 0
        while(temp):
            length += 1
            temp = temp.next
        count = 0
        temp = self.head
        while(count < length-index):
            count += 1
            temp = temp.next
        return temp.data
#  defining a method to reverse the order of linked list

    def reverse(self):
        prev_node = None
        next_node = None
        current_node = self.head
        while(current_node):
            next_node = current_node.next
            current_node.next = prev_node
            prev_node = current_node
            current_node = next_node
        self.head = prev_node


my_list = Linked_list()
my_list.head = Node(0)
second = Node(1)
third = Node(2)
second.next = third
fourth = Node(3)
third.next =  fourth
my_list.head.next = second
# print(my_list.nth_node(2))
# print(my_list.last_nth_node(1))
# my_list.display()
my_list.reverse()
my_list.display()

