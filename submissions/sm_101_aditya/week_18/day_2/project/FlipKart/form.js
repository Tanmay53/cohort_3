// constructor
function AllData(proImage, proName, proPrice, proBrand) {
        this.proImage = proImage,
        this.proName = proName,
        this.proPrice = proPrice,
        this.proBrand = proBrand
}

// taking input value
clicked = () => {
    event.preventDefault();
    var proImage = document.getElementById('proImage').value
    var proName = document.getElementById('proName').value
    var proPrice = document.getElementById('proPrice').value
    var proBrand = document.getElementById('proBrand').value

    let data = new AllData(proImage, proName, proPrice, proBrand)

    if (proImage == "" || proName == "" || proPrice == "" || proBrand == "") {
        alert("Input field mandatory")
    }
    else {

        var proData1 = JSON.parse(localStorage.getItem("proData"))
        if (proData1 == null) {
            proData1 = []
        }

        proData1.push(data);
        console.log(proData1)

        localStorage.setItem("proData", JSON.stringify(proData1))
    }


}