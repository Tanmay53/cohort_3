input_string = "        Mai   S a    --       i"
capitsl_alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
small_alphabets = "abcdefghijklmnopqrstuvwxyz"


def camelcase(input_string):
    i = 0
    out_str = ""
    while input_string[i] in [" ", "-", "_"]:
        i += 1
    j = i
    while j < len(input_string):
        if input_string[j] in [" ", "-", "_"]:
            k = j
            while input_string[k] in [" ", "-", "_"]:
                k += 1
            j = k
            k = 0
            if input_string[j] in capitsl_alphabets:
                out_str = out_str + input_string[j]
            else:
                temp = small_alphabets.index(input_string[j])
                out_str = out_str + capitsl_alphabets[temp]
        else:
            if input_string[j] in capitsl_alphabets:
                temp2 = capitsl_alphabets.index(input_string[j])
                out_str = out_str+small_alphabets[temp2]
            else:
                out_str = out_str+input_string[j]
        j += 1
    print(out_str)


def string_play(input_string, symbol):
    i = 0
    out_str = ""
    while input_string[i] in [" ", "-", "_"]:
        i += 1
    j = i
    while j < len(input_string):
        if input_string[j] in [" ", "-", "_"]:
            k = j
            while input_string[k] in [" ", "-", "_"]:
                k += 1
            j = k-1
            k = 0
            out_str = out_str + symbol
        else:
            if input_string[j] in capitsl_alphabets:
                temp2 = capitsl_alphabets.index(input_string[j])
                out_str = out_str+small_alphabets[temp2]
            else:
                out_str = out_str+input_string[j]
        j += 1
    print(out_str)


def snake_case(input_string):
    string_play(input_string, "_")


def hypen_case(input_string):
    string_play(input_string, "-")


camelcase(input_string)
snake_case(input_string)
hypen_case(input_string)
