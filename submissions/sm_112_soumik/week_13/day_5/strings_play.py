def snake_or_hipen(string, delimiter):
    temp_string = ""
    result_case = []
    for char in string:
        if char == " ":
            result_case.append(temp_string)
            result_case.append(delimiter)
            temp_string = ""
        else:
            temp_string += char
    result_case.append(temp_string)
    print(f'new string is {"".join(result_case)} with delimiter {delimiter}')


input_string = input("Enter a string : ")
delimiter = input("Enter delimiter : ")


def camel_case(string):
    string = list(string)
    temp_list = []
    temp_str = ""
    for letter in string:
        if letter == " ":
            temp_list.append(temp_str)
            temp_str = ""
        else:
            temp_str += letter

    temp_list.append(temp_str)
    ans_list = ""

    for items in temp_list:
        for idx, val in enumerate(items):
            if idx == 0:
                ans_list += val.upper()
            else:
                ans_list += val
    print("new string is", ans_list)


snake_or_hipen(input_string, delimiter)
camel_case(input_string)
