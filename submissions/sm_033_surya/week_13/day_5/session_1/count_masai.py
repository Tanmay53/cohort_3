input_file = open("random_ids.txt", "r")
finding_text = "masai"
count = 0
for line in input_file:
    if finding_text in line:
        count += 1
input_file.close()
print(count)
