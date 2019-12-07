function skillupdate(user,valueskill)
{
    user.skill=valueskill
    return user

}
var user={
    "name":"Aditya",
    "age":21,
    "education":"Btech",
    "skill":"fighter"

}
console.log(skillupdate(user,"player"))