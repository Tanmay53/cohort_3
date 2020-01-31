new_file = open("emails_rand.txt", "r")
new_temp = []
for items in new_file:
    new_temp.append(items.split("\n"))
duplicate = []
new_temp.sort()
for x in range(len(new_temp)-1):
    if new_temp[x] == new_temp[x + 1]:
        duplicate.append(new_temp[x])
        new_temp[x] = None

count = 0
for items in new_temp:
    if items != None:
        count += 1
print("Number of unique Elements are", count)

temp_count = 0
for letter in duplicate:
    if letter in duplicate:
        count += 1
    print(letter, temp_count)
