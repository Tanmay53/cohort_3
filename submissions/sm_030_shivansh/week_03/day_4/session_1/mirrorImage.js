//function  to find the mirror image of given string

function mirrorImage(str) {

    var mirrorStr = '';
    for (var i = 0; i < str.length; i++) {
        switch (str[i]) {
            case 'a':
                mirrorStr += 'z';
                break;
            case 'A':
                mirrorStr += 'Z';
                break;
            case 'b':
                mirrorStr += 'y';
                break;
            case 'B':
                mirrorStr += 'Y';
                break;
            case 'c':
                mirrorStr += 'x';
                break;
            case 'C':
                mirrorStr += 'X';
                break;
            case 'd':
                mirrorStr += 'w';
                break;
            case 'D':
                mirrorStr += 'W';
                break;
            case 'e':
                mirrorStr += 'v';
                break;
            case 'E':
                mirrorStr += 'V';
                break;

            case 'f':
                mirrorStr += 'u';
                break;
            case 'F':
                mirrorStr += 'U';
                break;
            case 'g':
                mirrorStr += 't';
                break;
            case 'G':
                mirrorStr += 'T';
                break;
            case 'h':
                mirrorStr += 's';
                break;
            case 'H':
                mirrorStr += 'S';
                break;
            case 'i':
                mirrorStr += 'r';
                break;
            case 'I':
                mirrorStr += 'R';
                break;
            case 'j':
                mirrorStr += 'q';
                break;
            case 'J':
                mirrorStr += 'Q';
                break;

            case 'k':
                mirrorStr += 'p';
                break;
            case 'K':
                mirrorStr += 'P';
                break;
            case 'l':
                mirrorStr += 'o';
                break;
            case 'L':
                mirrorStr += 'O';
                break;
            case 'm':
                mirrorStr += 'n';
                break;
            case 'M':
                mirrorStr += 'N';
                break;
            case 'n':
                mirrorStr += 'm';
                break;
            case 'N':
                mirrorStr += 'M';
                break;
            case 'o':
                mirrorStr += 'l';
                break;
            case 'O':
                mirrorStr += 'L';
                break;

            case 'p':
                mirrorStr += 'k';
                break;
            case 'P':
                mirrorStr += 'K';
                break;
            case 'q':
                mirrorStr += 'j';
                break;
            case 'Q':
                mirrorStr += 'J';
                break;
            case 'r':
                mirrorStr += 'i';
                break;
            case 'R':
                mirrorStr += 'I';
                break;
            case 's':
                mirrorStr += 'h';
                break;
            case 'S':
                mirrorStr += 'H';
                break;
            case 't':
                mirrorStr += 'g';
                break;
            case 'T':
                mirrorStr += 'G';
                break;

            case 'u':
                mirrorStr += 'f';
                break;
            case 'U':
                mirrorStr += 'F';
                break;
            case 'v':
                mirrorStr += 'e';
                break;
            case 'V':
                mirrorStr += 'E';
                break;
            case 'w':
                mirrorStr += 'd';
                break;
            case 'W':
                mirrorStr += 'D';
                break;
            case 'x':
                mirrorStr += 'c';
                break;
            case 'X':
                mirrorStr += 'C';
                break;
            case 'y':
                mirrorStr += 'b';
                break;
            case 'Y':
                mirrorStr += 'B';
                break;
            case 'z':
                mirrorStr += 'a';
                break;
            case 'Z':
                mirrorStr += 'A';
                break;

        }
    }

    return mirrorStr;
}

console.log(mirrorImage("AyzB"));
