function addSkills(object, skill)
{
    var key1 = "skills", cnt = 0;
    
    for(key in object)
    {
        if(key == key1)
        {
            cnt++;
            object.skills.push(skill);
        }
    }
    if(cnt == 0)
    {
        object[key1] = [skill];
    }
}

var person = {
    name : "Rahul",
    skills : ["cooking", "dancing"]
};

addSkills(person, "juggling")
 console.log(person);