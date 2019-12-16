function checkElementBefore(arr) {
    var arr1 = arr.reduce(function(element, index) {
        return element + index.list
    }, 0)
    console.log(arr1)
}
checkElementBefore([{ list: 100 }, { list: 120 }, { list: 200 }, { list: 44 }, { list: 150 }])