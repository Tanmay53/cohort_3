function propertyUpdate(obj, key, value) {
    obj[key] = value;
    return obj
}
var userdata = propertyUpdate({ name: 'chathan', age: 25, gender: 'male' }, 'weight', '50kg')
console.log(userdata)