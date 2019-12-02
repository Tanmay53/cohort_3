circus = {
    funny : 'joker',
    thrill : 'stuntman',
    beauty : 'dancer',
    skills: ['headspin','handstand']
    }
 function addskill(obj,key)
 {
        if(obj[key]){
            obj[key].push('Juggle','Jump Through Ring','Spit Fire')
        }
        else{
            obj[key]=['Juggle','Jump Through Ring','Spit Fire']
        }
    
    
        console.log(obj)
 }addskill(circus,'skills')