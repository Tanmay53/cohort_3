function category() {
            var category = document.getElementById("categories").value
            switch (category) {
                case 'Engineering':
                    document.getElementById("name").innerHTML = "Blessy"
                    document.getElementById("job").innerHTML = "senior engineer"
                    document.getElementById("salary").innerHTML = "50000 Rs"
                    document.getElementById("name1").innerHTML = "sneha"
                    document.getElementById("job1").innerHTML = "junior engineer"
                    document.getElementById("salary1").innerHTML = "45000 Rs"
                    document.getElementById("name2").innerHTML = "Sona"
                    document.getElementById("job2").innerHTML = "Maintanance engineer"
                    document.getElementById("salary2").innerHTML = "55000 Rs"


                    break;


                case 'Design':
                    document.getElementById("name").innerHTML = "Mariya"
                    document.getElementById("job").innerHTML = "design engineer"
                    document.getElementById("salary").innerHTML = "60000 Rs"
                    document.getElementById("name1").innerHTML = "Vineetha"
                    document.getElementById("job1").innerHTML = "Senior engineer"
                    document.getElementById("salary1").innerHTML = "70000 Rs"
                    document.getElementById("name2").innerHTML = "Lasya"
                    document.getElementById("job2").innerHTML = "system engineer"
                    document.getElementById("salary2").innerHTML = "40000 Rs"
                    break;
                case 'Sales':
                    document.getElementById("name").innerHTML = "John"
                    document.getElementById("job").innerHTML = "sales manager"
                    document.getElementById("salary").innerHTML = "40000 Rs"
                    document.getElementById("name1").innerHTML = "angel"
                    document.getElementById("job1").innerHTML = "Senior  sales executive"
                    document.getElementById("salary1").innerHTML = "42000 Rs"
                    document.getElementById("name2").innerHTML = "Nithin"
                    document.getElementById("job2").innerHTML = "sales 0fficer"
                    document.getElementById("salary2").innerHTML = "60000 Rs"
                    break;
                case 'Marketing':
                    document.getElementById("name").innerHTML = "Jilu"
                    document.getElementById("job").innerHTML = "Marketing manager"
                    document.getElementById("salary").innerHTML = "45000 Rs"
                    document.getElementById("name1").innerHTML = "joseph"
                    document.getElementById("job1").innerHTML = "Sales executive"
                    document.getElementById("salary1").innerHTML = "30000 Rs"
                    document.getElementById("name2").innerHTML = "Ashish"
                    document.getElementById("job2").innerHTML = "junior sales executive"
                    document.getElementById("salary2").innerHTML = "20000 Rs"
                    break;

            }


            var sal = document.getElementById("salary").innerHTML

            var sal1 = document.getElementById("salary1").innerHTML

            var sal2 = document.getElementById("salary2").innerHTML

            var total = parseInt(sal1) + parseInt(sal2) + parseInt(sal);

            document.getElementById("total").innerHTML = total;
            var num = 3;
            var avg = (total / num);
            document.getElementById("avg").innerHTML = avg;


        }