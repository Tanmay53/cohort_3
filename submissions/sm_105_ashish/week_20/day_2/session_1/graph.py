from collections import defaultdict

graph = defaultdict(list)

def addEdge(graph,key,element):
    graph[key].append(element)


def generate_edges(graph):
    edges = []

    for node in graph:
        for neighbour in graph[node]:

            edges.append((node,neighbour))
    return edges

addEdge(graph,'a','c') 
addEdge(graph,'b','c') 
addEdge(graph,'b','e') 
addEdge(graph,'c','d') 
addEdge(graph,'c','e') 
addEdge(graph,'c','a') 
addEdge(graph,'c','b') 
addEdge(graph,'e','b') 
addEdge(graph,'d','c') 
addEdge(graph,'e','c') 

# print(generate_edges(graph))
# print(graph)

# graph ={ 
# 'a':['c'], 
# 'b':['d'], 
# 'c':['e'], 
# 'd':['a', 'b'], 
# 'e':['b', 'c'] 
# } 
print(graph)
def find_path(graph, start, end, path =[]): 
  path = path + [start] 
  if start == end: 
    return path 
  for node in graph[start]: 
    if node not in path: 
      newpath = find_path(graph, node, end, path) 
      if newpath:  
        return newpath 
      return None

print(find_path(graph,"a","e"))