            var AOO = [];
            var k = 0;
            var l = 0
            var Db = []


        function Enter() {
            var grade = document.getElementById('Grade_select').value;
            var name = document.getElementById('name').value;
            var S_marks = document.getElementById('science_marks').value;
            var M_marks = document.getElementById('math_marks').value;
            var E_marks = document.getElementById('english_marks').value;
            var H_marks = document.getElementById('history_marks').value;
            var G_marks = document.getElementById('geography_marks').value;
            var sum = (Number(S_marks) + Number(M_marks) + Number(E_marks) + Number(H_marks) + Number(G_marks))
            var arr = [];
            arr[0] = Number(S_marks);
            arr[1] = Number(M_marks);
            arr[2] = Number(E_marks);
            arr[3] = Number(H_marks);
            arr[4] = Number(G_marks);
            //  function to calculate average
            function average(sum) {
                var average1 = Math.floor(Number(sum / 5))
                return average1;
            }
             // function to calculate max 
            function maximum(arr) {
                var max = arr[0]
                for (var i = 0; i < arr.length; i++) {
                    if (arr[i] > max)
                        max = arr[i]
                    else
                        continue;
                }
                return max;
            }
             //function to calculate minimum
            function minimum(arr) {
                var min = 0
                min = arr[0]
                for (var i = 0; i < arr.length; i++) {
                    if (arr[i] < min)
                        min = arr[i]
                    else
                        continue;
                }
                return min;
            }
            var average1 = average(sum)
            var min = minimum(arr)
            var max = maximum(arr)
            var obj = {
                grade: grade,
                name: name,
                S_marks: S_marks,
                M_marks: M_marks,
                E_marks: E_marks,
                H_marks: H_marks,
                G_marks: G_marks,
                min: min,
                average: average1,
                max: max,
            };
            var student = Object.values(obj);
            console.log(student);
            addData(obj);
            //AOO==Array of Objects ACTS AS A DATABASE FOR ALL ENTRIES
            AOO[k] = obj;
            k += 1;
            Db[l] = AOO;
            l += 1;
            console.log(AOO)
        }
        // console.log(Db)
        // for(var f=0;f<Db.length;f++)
        // {
        //     if(Db[obj["grade"]]=="4")
        //     {
        //         console.log("sdgqad")
        //     }
        // }

        console.log(Db)
        function addData(obj) {
            var table1 = document.querySelector('table');
            var tr1 = document.createElement('tr');
            tr1.innerHTML = '<td>' + obj.grade + '<td>' + obj.name + '<td>' + obj.S_marks + '<td>' + obj.M_marks + '<td>' + obj.E_marks + '<td>' + obj.H_marks + '<td>' + obj.G_marks + '<td id="minimum1">' + obj.min + '<td id="average1">' + obj.average + '<td id="maximum">' + obj.max
            table1.appendChild(tr1);
        }
        function Reset(){
            var grade = document.getElementById('Grade_select').value="";
            var name = document.getElementById('name').value="";
            var S_marks = document.getElementById('science_marks').value="";
            var M_marks = document.getElementById('math_marks').value="";
            var E_marks = document.getElementById('english_marks').value="";
            var H_marks = document.getElementById('history_marks').value="";
            var G_marks = document.getElementById('geography_marks').value="";
        }