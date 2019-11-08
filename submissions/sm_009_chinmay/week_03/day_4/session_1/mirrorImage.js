// Print the mirror image of the given string AyzB should become ZbaY

function mirrorImage(string) {

 var mirrorString = ""
 for (i = 0; i <= string.length; i++) {
  switch (string.charAt(i)) {
   case 'A':
    mirrorString += "Z"
    break;
   case 'B':
    mirrorString += "Y"
    break;
   case 'C':
    mirrorString += "X"
    break;
   case 'D':
    mirrorString += "W"
    break;
   case 'E':
    mirrorString += "V"
    break;
   case 'F':
    mirrorString += "U"
    break;
   case 'G':
    mirrorString += "T"
    break;
   case 'H':
    mirrorString += "S"
    break;
   case 'I':
    mirrorString += "R"
    break;
   case 'J':
    mirrorString += "Q"
    break;
   case 'K':
    mirrorString += "P"
    break;
   case 'L':
    mirrorString += "O"
    break;
   case 'M':
    mirrorString += "N"
    break;
   case 'N':
    mirrorString += "M"
    break;
   case 'O':
    mirrorString += "L"
    break;
   case 'P':
    mirrorString += "K"
    break;
   case 'Q':
    mirrorString += "J"
    break;
   case 'R':
    mirrorString += "I"
    break;
   case 'S':
    mirrorString += "H"
    break;
   case 'T':
    mirrorString += "G"
    break;
   case 'U':
    mirrorString += "F"
    break;
   case 'V':
    mirrorString += "E"
    break;
   case 'W':
    mirrorString += "D"
    break;
   case 'X':
    mirrorString += "C"
    break;
   case 'Y': mirrorString += "B"
    break;
   case 'Z':
    mirrorString += "A"
    break;

   // lower cases
   case 'a':
    mirrorString += "z"
    break;
   case 'b':
    mirrorString += "y"
    break;
   case 'c':
    mirrorString += "x"
    break;
   case 'd':
    mirrorString += "w"
    break;
   case 'e':
    mirrorString += "v"
    break;
   case 'f':
    mirrorString += "u"
    break;
   case 'g':
    mirrorString += "t"
    break;
   case 'h':
    mirrorString += "s"
    break;
   case 'i':
    mirrorString += "r"
    break;
   case 'j':
    mirrorString += "q"
    break;
   case 'k':
    mirrorString += "p"
    break;
   case 'l':
    mirrorString += "o"
    break;
   case 'm':
    mirrorString += "n"
    break;
   case 'n':
    mirrorString += "m"
    break;
   case 'o':
    mirrorString += "l"
    break;
   case 'p':
    mirrorString += "k"
    break;
   case 'q':
    mirrorString += "j"
    break;
   case 'r':
    mirrorString += "i"
    break;
   case 's':
    mirrorString += "h"
    break;
   case 't':
    mirrorString += "g"
    break;
   case 'u':
    mirrorString += "f"
    break;
   case 'v':
    mirrorString += "e"
    break;
   case 'w':
    mirrorString += "d"
    break;
   case 'x':
    mirrorString += "c"
    break;
   case 'y':
    mirrorString += "b"
    break;
   case 'z':
    mirrorString += "a"
    break;
  }
 }
 console.log(mirrorString)
}


mirrorImage("AyzB")
// mirrorImage("")
//mirrorImage("ZbaY")
// mirrorImage("sfasbASDASDBNhasidgasid")