input = "AyzB"
def convert(n):
    if n <=90 and n >= 65:
        return 90 + 65 - n
    if n <= 122 and n >= 97:
        return 122 + 97 - n 
mirror_image = ""
for i in input:
    x = chr(convert(ord(i)))
    mirror_image += x
print(mirror_image)  
  
