# Check if two given sets are disjoint or not (NOTE: You can't use inbuilt set function)
set_1 = {'m', 'a', 's', 'a', 'i'}
set_2 = {'z', 'y'}

intersection_set = set_1 & set_2

if len(intersection_set)==0:
    print('Given sets are disjoint')
else:
    print('Given sets are not disjoint')