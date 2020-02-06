# creating Node class to make a node of linked list
class Node:
    def __init__(self,data):
        self.data = data
        self.next = None

# creating Linked list class to make the linked list using nodes.

class Linked_list:
    def __init__(self):
        self.head = None
#  defining a method to diplay the data of linked list   
    def display(self):
        cur = self.head
        if cur == None:
            print('Empty linked list')
        else:
            while(cur):
                print(cur.data)
                cur = cur.next 
# defining a method to insert an element at the head
    def push(self,new_data):
        new_node = Node(new_data)
        new_node.next = self.head
        self.head = new_node

#  defining a method to append a new element at the end

    def append(self,new_data):
        new_node = Node(new_data)

        if self.head == None:
            self.head = new_node
            return
        
        current = self.head
        while(current.next):
            current = current.next
        
        current.next = new_node

# defining a method to insert an element after particular Node
    def insert_after(self,prev_node,new_data):
        if prev_node == None:
            print('Node not found in linked list')
            return
        new_node = Node(new_data)
        new_node.next = prev_node.next
        prev_node.next = new_node
# defining a method to delete a particular node
    def delete_Node(self,key):
        temp = self.head

        if(temp is not None):
            if temp.data == key:
                self.head = temp.next
                temp = None
                return

        while(temp is not None): 
           if temp.data == key: 
               break 
           prev = temp 
           temp = temp.next 
        
        if(temp == None):
            return
        prev.next = temp.next

        temp = None
# defining a method to print the length of given linked list

    def length(self):
        temp = self.head
        count = 0
        while(temp):
            temp = temp.next
            count += 1
        return count

# defining a method to get the length of linked list using recursive method

    def get_count_rec(self,node):
        if(node):
            return 1 + self.get_count_rec(node.next)
        else:
            return 0
    
    def get_count(self):
        return self.get_count_rec(self.head)

      
my_list  = Linked_list()
my_list.head = Node(1)
second = Node(2)
third  = Node(3)
my_list.head.next = second
second.next = third
my_list.push(0)
my_list.append(5)
my_list.insert_after(third, 4)
my_list.delete_Node(3)
print(my_list.length())
print(my_list.get_count())
my_list.display()

