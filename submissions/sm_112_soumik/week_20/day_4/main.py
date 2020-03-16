from pkgs.area import *
from pkgs.operations import *

num = int(input("Enter a number : "))

res_cube = cube(num)
res_fact = fact(num)
res_area = area(num)
res_perimeter = perimeter(num)

print(res_area)
print(res_fact)
print(res_cube)
print(res_perimeter)
