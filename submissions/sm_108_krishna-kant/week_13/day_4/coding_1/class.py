class base:
    x = 2;
    _x = 5;
    def printx(self):
        print(self.x)
        print(self._x)
class child(base):
    pass


childClass = child()
baseClass = base()
childClass.printx()
print(childClass._x)
print(childClass.x)