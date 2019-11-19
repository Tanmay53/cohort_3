function addData() {
    var name = document.getElementById('name').value
    var grade = document.getElementById('grade').value
    var science = Number(document.getElementById('science').value)
    var math = Number(document.getElementById('math').value)
    var english = Number(document.getElementById('english').value)
    var history = Number(document.getElementById('history').value)
    var geography = Number(document.getElementById('geography').value)

    var div1 = document.createElement('div');
    div1.setAttribute('id','div1');
    div1.innerHTML=name;
    var bodyEle = document.querySelector('#marksheet');
    bodyEle.appendChild(div1);

    var div2 = document.createElement('div');
    div2.setAttribute('id','div2');
    div2.innerHTML=grade;
    var bodyEle = document.querySelector('#marksheet');
    bodyEle.appendChild(div2);

    var div3 = document.createElement('div');
    div3.setAttribute('id','div3');
    div3.innerHTML=science;
    var bodyEle = document.querySelector('#marksheet');
    bodyEle.appendChild(div3);

    var div4 = document.createElement('div');
    div4.setAttribute('id','div4');
    div4.innerHTML=math;
    var bodyEle = document.querySelector('#marksheet');
    bodyEle.appendChild(div4);

    var div5 = document.createElement('div');
    div5.setAttribute('id','div5');
    div5.innerHTML=english;
    var bodyEle = document.querySelector('#marksheet');
    bodyEle.appendChild(div5);

    var div6 = document.createElement('div');
    div6.setAttribute('id','div6');
    div6.innerHTML=history;
    var bodyEle = document.querySelector('#marksheet');
    bodyEle.appendChild(div6);

    var div7 = document.createElement('div');
    div7.setAttribute('id','div7');
    div7.innerHTML=geography;
    var bodyEle = document.querySelector('#marksheet');
    bodyEle.appendChild(div7);


    var Total = (science+math+english+history+geography)
    var Avg = Total/5

    var div8 = document.createElement('div');
    div8.setAttribute('id','div8');
    div8.innerHTML=Total;
    var bodyEle = document.querySelector('#marksheet');
    bodyEle.appendChild(div8);

    var div9 = document.createElement('div');
    div9.setAttribute('id','div9');
    div9.innerHTML=Avg;
    var bodyEle = document.querySelector('#marksheet');
    bodyEle.appendChild(div9);

    store()
}
var B = []

function store() {
    var nameA = document.getElementById('name').value
    var gradeA = document.getElementById('grade').value
    var scienceA = Number(document.getElementById('science').value)
    var mathA = Number(document.getElementById('math').value)
    var englishA = Number(document.getElementById('english').value)
    var historyA = Number(document.getElementById('history').value)
    var geographyA = Number(document.getElementById('geography').value)

    var TotalA = (scienceA+mathA+englishA+historyA+geographyA)
    var AvgA = TotalA/5

    A = [nameA,gradeA,scienceA,mathA,englishA,historyA,geographyA,TotalA,AvgA]
    
    B.push(A)

    console.log(B)
}

function gradeWise() {
    // len=B.length
    // for(i=0;i<(7*len);i++){
    //     var rmv = document.querySelector('#marksheet');
    //     rmv.removeChild(div1);
    //     rmv.removeChild(div2);
    //     rmv.removeChild(div3);
    //     rmv.removeChild(div4);
    //     rmv.removeChild(div5);
    //     rmv.removeChild(div6);
    //     rmv.removeChild(div7);
    //     rmv.removeChild(div8);
    //     rmv.removeChild(div9);
    var grd = document.getElementById('gradewise').value
    for(i=0;i<B.length;i++){
        if((B[i][1])==grd){
            var b1 = document.createElement('div');
            // div9.setAttribute('id','div9');
            b1.innerHTML=B[i][0];
            var bodyEle = document.querySelector('#grades');
            bodyEle.appendChild(b1);

            var b2 = document.createElement('div');
            // div9.setAttribute('id','div9');
            b2.innerHTML=B[i][1];
            var bodyEle = document.querySelector('#grades');
            bodyEle.appendChild(b2);

            var b3 = document.createElement('div');
            // div9.setAttribute('id','div9');
            b3.innerHTML=B[i][2];
            var bodyEle = document.querySelector('#grades');
            bodyEle.appendChild(b3);

            var b4 = document.createElement('div');
            // div9.setAttribute('id','div9');
            b4.innerHTML=B[i][3];
            var bodyEle = document.querySelector('#grades');
            bodyEle.appendChild(b4);

            var b5 = document.createElement('div');
            // div9.setAttribute('id','div9');
            b5.innerHTML=B[i][4];
            var bodyEle = document.querySelector('#grades');
            bodyEle.appendChild(b5);

            var b6 = document.createElement('div');
            // div9.setAttribute('id','div9');
            b6.innerHTML=B[i][5];
            var bodyEle = document.querySelector('#grades');
            bodyEle.appendChild(b6);

            var b7 = document.createElement('div');
            // div9.setAttribute('id','div9');
            b7.innerHTML=B[i][6];
            var bodyEle = document.querySelector('#grades');
            bodyEle.appendChild(b7);

            var b8 = document.createElement('div');
            // div9.setAttribute('id','div9');
            b8.innerHTML=B[i][7];
            var bodyEle = document.querySelector('#grades');
            bodyEle.appendChild(b8);

            var b9 = document.createElement('div');
            // div9.setAttribute('id','div9');
            b9.innerHTML=B[i][8];
            var bodyEle = document.querySelector('#grades');
            bodyEle.appendChild(b9);

        }
    }

  
}