#User function Template for python3
'''
	Function to merge two sorted lists in one
	using constant space.
	
	Function Arguments: head_a and head_b (head reference of both the sorted lists)
	Return Type: head of the obtained list after merger.

	{
		# Node Class
		class Node:
		    def __init__(self, data):   # data -> value stored in node
		        self.data = data
		        self.next = None
	}

	Contributed By: Nagendra Jha
'''
def insert(head, key):
    if head == None:
        head = Node(key)
    else:
        itr = head
        while itr.next:
            itr = itr.next
        itr.next = Node(key)
        
    return head
    
def append(head, node):
    if head == None:
        head = node
    else:
        itr = head
        while itr.next:
            itr = itr.next
        itr.next = node
        
    return head
    


def merge(head_a,head_b):
    itr1 = head_a
    itr2 = head_b
    
    head = None    
    while itr1 and itr2:
        if itr1.data < itr2.data:
            head = insert(head, itr1.data)
            itr1 = itr1.next
        else:
            head = insert(head, itr2.data)
            itr2 = itr2.next
        
    if itr1 == None:
        append(head, itr2)
    if itr2 == None:
        append(head, itr1)
        
    return head
            
            
            
        



#{ 
#  Driver Code Starts
#Initial Template for Python 3
# Node Class
class Node:
    def __init__(self, data):   # data -> value stored in node
        self.data = data
        self.next = None

# Linked List Class
class LinkedList:
    def __init__(self):
        self.head = None

    # creates a new node with given value and appends it at the end of the linked list
    def append(self, new_value):
        new_node = Node(new_value)
        if self.head is None:
            self.head = new_node
            return
        curr_node = self.head
        while curr_node.next is not None:
            curr_node = curr_node.next
        curr_node.next = new_node

    # prints the elements of linked list starting with head
    def printList(self):
        if self.head is None:
            print(' ')
            return
        curr_node = self.head
        while curr_node:
            print(curr_node.data,end=" ")
            curr_node=curr_node.next
        print(' ')

if __name__ == '__main__':
    t=int(input())
    for cases in range(t):
        n,m = map(int, input().strip().split())
        a = LinkedList() # create a new linked list 'a'.
        b = LinkedList() # create a new linked list 'b'.
        nodes_a = list(map(int, input().strip().split()))
        nodes_b = list(map(int, input().strip().split()))
        for x in nodes_a:
            a.append(x)
        for x in nodes_b:
            b.append(x)
        a.head = merge(a.head,b.head)
        a.printList()
# } Driver Code Ends
