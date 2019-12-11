profile = {
    name: 'Rohit',
    knowledge: ['Adode', 'FSD']
}

function addSkill(obj, key) {
    if (obj[key]) {
        obj[key].push('CoralDraw', 'AutoDesk', 'Ps')
    } else {
        obj[key] = ('CoralDraw', 'AutoDesk', 'Ps')
    }
    console.log(obj)
}

addSkill(profile, 'knowledge')