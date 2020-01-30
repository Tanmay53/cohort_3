# making method which will return the layer of pyramid in an array.
def pyramid_arr(level):
    final_arr = []
    for j in range(level):
        arr  = []
        for i in range(level*2+1-2*j): 
            arr.append(".") if i%2 == 0 else arr.append("0")
        final_arr.append(arr)
        arr = []
    final_arr.reverse()
    for k in range(len(final_arr)-1):
        for _ in range(k,len(final_arr)-1):
            final_arr[k].append(".")
            final_arr[k].reverse()
            final_arr[k].append(".")
    return final_arr

# making method to show pyramid using the prviuosly made method:

def pyramid(level):
    pyramid_level = pyramid_arr(level)
    for x in pyramid_level:
        print(''.join(x))
# making pyramid of level 5 
# pyramid(5)

#  making method to show inverse of pyramid using the previousaly made method which give as pyramid level:

def inverse_pyramid(level):
    pyramid_level = pyramid_arr(level)
    pyramid_level.reverse()
    for y in pyramid_level:
        print(''.join(y))

# inverse_pyramid(5)

def rhombus(level):
    pyramid_level = pyramid_arr(level)
    for p in pyramid_level:
        print(''.join(p))
    reverse_pyramid_level = pyramid_arr(level)
    reverse_pyramid_level.reverse()
    for q in range(1,len(reverse_pyramid_level)):
        print(''.join(reverse_pyramid_level[q]))

rhombus(15)
