    var ctgry = document.getElementById('CategoryListChoices').value;
    var nme = document.getElementById('name').value;
    var pice = document.getElementById('price').value;
    var total = 0
    var avg = 0

    function Enter() {
        printItem(CategoryListChoices, name, price) reset()
    }

    function reset() {
        document.getElementById('CategoryListChoices').value = " "
        document.getElementById('name').value = " "
        document.getElementById('price').value = " "
    }

    function printItem(CategoryListChoices, name, price) {
        CategoryListChoices.innerHTML = CategoryListChoices
        name.innerHTML = name
        price.innerHTML = price
    }