# @param : ("string")
def create_set(string_list):
    return set(string_list.split())

first = input("Enter Values for Set 1: ")
second = input("Enter Values for set 2: ")
third = input("Enter Values for set 3: ")

first_set = create_set(first)
second_set = create_set(second)
third_set = create_set(third)

answer_set = set()
for char in first_set:
    if char in second and char in third_set:
        answer_set.add(char)

print(answer_set)