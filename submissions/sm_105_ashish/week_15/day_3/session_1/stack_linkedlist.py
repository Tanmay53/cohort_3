class Node:
    def __init__(self,data):
        self.data = data
        self.next = None

class stack:
    def __init__(self):
        self.head = None

    def isEmpty(self):
        return False if self.head else True
    
    def display(self):
        temp = self.head
        if temp:
            while temp:
                print(temp.data , end = " ")
                temp = temp.next
            return    
        else:
            print('stack is empty')

    def push(self , new_data):
        new_node = Node(new_data)
        new_node.next = self.head
        self.head = new_node

    def pop(self):
        temp = self.head
        if temp:
            self.head = self.head.next
            temp.next = None
            return temp.data
        else:
            print('stack is empty')
        
    def peek(self):
        temp = self.head
        if temp:
            print(self.head.data)
        else:
            return None

mystack = stack()
mystack.push(5)
mystack.push(6)
mystack.push(7)
mystack.push(8)
mystack.display()
# print(mystack.pop())
# mystack.pop()
# mystack.peek()
# print(mystack.isEmpty())