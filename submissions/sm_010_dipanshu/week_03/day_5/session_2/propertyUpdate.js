function update(obj,prop,val){
    console.log(obj.prop)
    obj[prop] = val
    return obj
}

sample = {
    name: 'Masai',
    age: 25,
    email: 'writetodipanshu@gmail.com'
}

console.log(update(sample,'name','Dipanshu Sabharwal'))
console.log(update(sample,'location','Bangalore'))