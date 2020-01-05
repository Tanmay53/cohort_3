class student{
    constructor(name="invalid",email="invalid",phone="invalid")
    {
        this.name=name;
        this.email=email;
        this.phone=phone;
        
    }
    assignMarks(eng,maths,sci)
    {
        this.eng=eng;
        this.maths=maths;
        this.sci=sci;
    }
    showMarks()
    {
        arr=[]
        arr.push(this.eng)
        arr.push(this.maths)
        arr.push(sci)
        console.log(arr)
    }
    highestMarks(arr)
    {
      arr.sort((a,b)=>a-b)
      return arr(arr.length-1)
    }
    low(arr){
        arr.sort((a,b)=>a-b)
      return arr[0]  
    }
    totalSubjects(arr)
    {
        return arr.length-1
    }
    average(arr)
    {
        sum=0
        for(var i=0;i<=arr.length-1;i++){
            sum=sum+arr[i]
        }
        avg=sum/arr.length
    }
}