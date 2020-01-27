full_brick = "|___|"
lefthalf_brick = "__|"
righthalf_brick = "|__"
width = 4
height = 5

ht_str = ""
ht_str =""
for ht in range(0, height):
    if ht % 2 == 0:
        for wd in range(0, width):
            ht_str += righthalf_brick
        ht_str += "|\n"
    else:
        for wdt in range(0, width):
            ht_str += lefthalf_brick
        ht_str += "__\n"

print(ht_str)