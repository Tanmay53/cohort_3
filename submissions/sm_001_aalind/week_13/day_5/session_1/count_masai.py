file = open('random_ids.txt', 'r')
masai_count = 0

for line in file.readlines():
    masai_count += len(line.lower().split('masai'))-1

print(masai_count)