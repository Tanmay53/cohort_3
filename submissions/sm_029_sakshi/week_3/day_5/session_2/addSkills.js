function skillupdate(user,valueskill)
{
    user.skill=valueskill
    return user

}
var user={
    "name":"sakshi",
    "age":21,
    "education":"12th pass",
    "skill":"singiing"

}
console.log(skillupdate(user,"dancing"))