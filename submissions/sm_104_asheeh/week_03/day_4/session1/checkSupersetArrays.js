function checkSupersetArrays(arr1, arr2)
{
    if(arr1.length >arr2.length)
    {
      var count = 0
      for(var i=0 ; i<arr2.length ; i++)
      {
          for(var j=0 ; j<arr1.length ; j++)
          {
              if(arr2[i] == arr1[j])
              {
                  count = count + 1
                  break;
              }
          }
      }
      if(count == arr2.length)
      {
          return ('arr1 is superset of arr2 ')
      }
      else
      {
          return ('arr1 is not a superset of arr2 ')
      }
    }
    else
    {
        return ('arr1 is not a superset of arr2')
    }
}

console.log(checkSupersetArrays([1, 2, 4, 7, 5, 9], [5, 8, 4]))
//Test case1: arr1 = [1,2,4,7,5,9]  arr2 = [5,8,4]
//Test case2: arr1 = [1,3,5,7,9,4]  arr2 = [3,7,4]
//Test case3: arr1 = [2,4,5,6,7]    arr2= [1,4,5,6,7,8,9]